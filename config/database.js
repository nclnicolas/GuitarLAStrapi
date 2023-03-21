module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfej0tsgqg46rpgop9r0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_4nom'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '1mkF1YG9G40NeBf7Gf4lZ3D8sVDSuvPp'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
