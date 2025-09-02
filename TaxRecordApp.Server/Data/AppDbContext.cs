using Microsoft.EntityFrameworkCore;

namespace TaxRecordApp.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    { 
        public DbSet<TaxRecord> TaxRecords { get; set; }
        
    }
}