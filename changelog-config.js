module.exports = {
    name: "conventionalcommits",
    header: '<div align="center"><h1>📝 Changelog</h1><p>All changes in this package are documented below.</p></div>\n\n---\n',
    types: [
        { type: "feat", section: "✨ Features", hidden: false },
        { type: "fix", section: "🐛 Bug Fixes", hidden: false },
        { type: "chore", section: "👨‍💻 Chores", hidden: false },
        { type: "docs", section: "📝 Documentation", hidden: false },
        { type: "refactor", section: "♻️ Refactors", hidden: false },
        { type: "test", section: "🧪 Tests", hidden: false },
        { type: "build", section: "🛠 Build", hidden: true },
        { type: "perf", hidden: true },
        { type: "style", hidden: true },
        { type: "ci", hidden: true },
        { type: "revert", hidden: true }
    ],
    commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commit/{{hash}}',
    compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
    issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/issues/{{id}}',
    userUrlFormat: '{{host}}/{{user}}',
    releaseCommitMessageFormat: 'chore(release): {{currentTag}}',
    issuePrefixes: ['#']
};
