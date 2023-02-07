using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_celder20.Models
{
    public class CalculatorModel
    {
        // Error messages are shot out if the user does not put in a number between 0 and 100
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for assignments")]
        public int Assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for group projects")]
        public int Project { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for quizzes")]
        public int Quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for midterms")]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for finals")]
        public int Final { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100 for intex")]
        public int Intex { get; set; }


    }
}
