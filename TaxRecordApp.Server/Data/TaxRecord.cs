using System.ComponentModel.DataAnnotations;
namespace TaxRecordApp.Data
{
    public class TaxRecord
    { 
        [Key]
        public int Id { get; set; }
        public required string RecordTitle { get; set; }
        public required int TaxYear { get; set; }
        public required decimal IncomeAccount { get; set; }
        public required decimal DeductionsAmount { get; set; }
        public string Notes { get; set; }

    }
}
