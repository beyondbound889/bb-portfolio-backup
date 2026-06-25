export type NavItem = { label: string; href: string };

export type Credential = { label: string; sub?: string };

export type JourneyStage = {
  index: string;
  title: string;
  period: string;
  body: string;
  proof?: string;
};

export type FocusArea = {
  icon: string;
  title: string;
  body: string;
  impact: string;
};

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
  verified: boolean;
};

export type Insight = {
  kind: string;
  title: string;
  excerpt: string;
  href: string;
  source: string;
};

export type Value = { icon: string; title: string; body: string };

export type MediaItem = {
  kind: string;
  title: string;
  context: string;
  href?: string;
};
