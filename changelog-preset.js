const config = require('conventional-changelog-conventionalcommits')

module.exports = config({
    name:"conventionalcommits",
    header: '<div align="center"><h1>📝 Changelog</h1><p>All changes in this package are documented below.</p></div>\n\n---\n',
    types: [
        { type: "feat", section: "✨ Features", hidden: false },
        { type: "fix", section: "🐛 Bug Fixes", hidden: false },
        { type: "chore", section: "👨‍💻 Chores", hidden: false },
        { type: "docs", section: "📝 Documentation", hidden: false },
        { type: "refactor", section: "♻️ Refactors", hidden: false },
        { type: "test", section: "🧪 Tests", hidden: false },
        { type: "build", section: "🛠 Build", hidden: true },
        { type: "infra", section: "Infrastructure Changes", hidden: true },
        { type: "perf", hidden: true },
        { type: "style", hidden: true },
        { type: "ci", hidden: true },
        { type: "revert", hidden: true }
    ],
    issuePrefixes: ['#']
})
