const getters = {
  isMobile: (state) => state.app.isMobile,
  lang: (state) => state.app.lang,
  theme: (state) => state.app.theme,
  color: (state) => state.app.color,
  multiTab: (state) => state.app.multiTab,
  addRouters: (state) => state.permission.addRouters,
  token: (state) => state.user.token,
  username: (state) => state.user.username,
  role: (state) => state.user.role,
  avatar: (state) => state.user.avatar,
  teams: (state) => state.user.teams,
  preference: (state) => state.user.preference,
  teamId: (state) => state.teamInfo.teamId,
  projectId: (state) => state.projectInfo.projectId,
  teamName: (state) => state.teamInfo.teamName,
  projectName: (state) => state.projectInfo.projectName,
  teamCreateTime: (state) => state.teamInfo.createTime,
  projectCreateTime: (state) => state.projectInfo.createTime,
  teamAdminName: (state) => state.teamInfo.adminName,
  projectAdminName: (state) => state.projectInfo.adminName,
  projectLogo: (state) => state.projectInfo.projectInfo,
  projectIsPublic: (state) => state.projectInfo.isPublic,
  teamProjects: (state) => state.teamInfo.teamProjects,
  teamMembers: (state) => state.teamInfo.members,
  projectMembers: (state) => state.projectInfo.members,
  teamTasks: (state) => state.teamTasks.tasks,
  projectTasks: (state) => state.projectTasks.tasks,
  projectSubTasks: (state) => state.projectTasks.subTasks,
  teamKB: (state) => state.teamInfo.knowledgeBase,
  projectKB: (state) => state.projectInfo.knowledgeBase,
  bulletins: (state) => state.projectInfo.bulletins,
  notifications: (state) => state.notification.notifications,
  sessionKey: (state) => state.app.sessionKey,
}

export default getters
