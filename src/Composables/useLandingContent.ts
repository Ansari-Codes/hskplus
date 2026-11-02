import type { LandingFeature, LandingNavLink, LandingStep } from '../Pages/Home/types'

export function useLandingContent() {
  const navLinks: LandingNavLink[] = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Why HSK Plus', href: '#features' },
  ]

  const features: LandingFeature[] = [
    {
      icon: 'book',
      title: 'Learn the words that matter',
      description: 'Build a strong foundation with focused vocabulary for every HSK level.',
    },
    {
      icon: 'sparkles',
      title: 'Make practice a habit',
      description: 'Short, clear study sessions help you make steady progress every day.',
    },
    {
      icon: 'check',
      title: 'See how far you have come',
      description: 'Keep track of what you know and what you want to practice next.',
    },
  ]

  const steps: LandingStep[] = [
    {
      number: '01',
      title: 'Choose your level',
      description: 'Start where you are, whether you are learning your first words or preparing for a test.',
    },
    {
      number: '02',
      title: 'Practice a little each day',
      description: 'Review useful vocabulary and build confidence one session at a time.',
    },
    {
      number: '03',
      title: 'Keep moving forward',
      description: 'Watch your progress grow as new words become part of your everyday Chinese.',
    },
  ]

  return { navLinks, features, steps }
}
