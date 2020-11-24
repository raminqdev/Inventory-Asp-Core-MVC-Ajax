﻿using Helper.Library.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Inventory_Asp_Core_MVC_Ajax.EFModels
{
    [Table("Storages")]
    public class Storage : Updateable
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Column(TypeName = "varchar(50)")]
        public string Name { get; set; }

        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$")]
        [DataType(DataType.PhoneNumber)]
        [MaxLength(14)]
        [Column(TypeName = "varchar(14)")]
        public string Phone { get; set; }

        [MaxLength(150)]
        [Column(TypeName = "varchar(150)")]
        public string Address { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}