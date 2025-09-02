namespace TaxRecordApp.Data
{
    public class TaxRecord
    { 
        public int Id { get; set; }
        public string RecordTitle { get; set; }
        public int TaxYear { get; set; }
        public decimal IncomeAccount { get; set; }
        public decimal DeductionsAmount { get; set; }
        public string Notes { get; set; }

    }
}
