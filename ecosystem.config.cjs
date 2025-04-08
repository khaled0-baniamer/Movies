module.exports = {
  apps: [
    {
      name: "movies",
      script: "npx",
      args: " serve dist/ --single -p 3010",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};