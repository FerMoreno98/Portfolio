using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using portfolio.Modelos;
using portfolio.Servicio;
using System.ComponentModel.DataAnnotations;
namespace portfolio.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly Conexion _conexion;

        public IndexModel(ILogger<IndexModel> logger,Conexion conexion)
        {
            _logger = logger;
            _conexion = conexion;
        }

        public void OnGet()
        {

        }

        public async Task<JsonResult> OnPostEnviarMensaje([FromBody]Message message)
        {
            using (var connection = await _conexion.ConnectToDatabaseAsync())
            {
                try
                {
                    string sql = "insert into Mensaje(Email,Mensaje)values(@email,@mensaje)";
                    var parametros = new
                    {
                        Email = message.Email,
                        Mensaje = message.Mensaje
                    };

                    var rowsAfectadas = await connection.ExecuteAsync(sql, parametros);
                    if (rowsAfectadas > 0)
                    {
                        return new JsonResult(new {success= true, message="El mensaje se ha enviado correctamente"});
                    }
                    else
                    {
                        return new JsonResult(new { success = false, message = "Error no ha habido filas afectadas" });
                    }
                }
                catch (Exception ex)
                {
                    
                    return new JsonResult(new { success = false, message = $"Error: {ex.Message}" });
                }

            }

        }
    }
}
