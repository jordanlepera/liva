module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) =>
      /\(\[[0-9a-fA-F]+]\(https:\/\/github\.com\/[^/]+\/[^/]+\/commit\/[0-9a-fA-F]+\)\)/g.test(
        message,
      ),
    (message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message),
  ],
};
