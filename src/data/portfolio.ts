// Re-export from the BR file as default data source
// Components now use LanguageContext instead of importing directly
export type { TimelineItemType, TimelineEntry, Project, Course, PortfolioLabels } from "./portfolio-br";
export { timelineData, projectsData, coursesData, profile, labels } from "./portfolio-br";
