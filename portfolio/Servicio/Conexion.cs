
using Microsoft.Data.SqlClient;
namespace portfolio.Servicio
{
    public class Conexion
    {
        private readonly string _connectionString;
        public Conexion(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task<SqlConnection> ConnectToDatabaseAsync()
        {
            try
            {
                SqlConnection connection = new SqlConnection(_connectionString);               
                connection.Open();
                Console.WriteLine("Conexión exitosa!");
                return connection;  
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error al conectar: {ex.Message}");
                return null;  
            }
        }
    }
}
