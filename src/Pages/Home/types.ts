export interface LandingNavLink {
  label: string
  href: string
}

export interface LandingFeature {
  icon: 'book' | 'sparkles' | 'check'
  title: string
  description: string
}

export interface LandingStep {
  number: string
  title: string
  description: string
}
