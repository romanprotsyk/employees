using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace webapi.Models
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employee { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=sql7.freemysqlhosting.net;database=sql7353267;user=sql7353267;password=Qf99iBqfww;treattinyasboolean=true;ConvertZeroDateTime=True", x => x.ServerVersion("5.5.62-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity =>
            {
                //entity.HasNoKey();

                entity.ToTable("employee");

                entity.Property(e => e.EmployeeNumber)
                    .HasColumnName("employeeNumber")
                    .HasColumnType("int(11)");

                entity.Property(e => e.FirstName)
                    .HasColumnName("firstName")
                    .HasColumnType("varchar(20)")
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.LastName)
                    .HasColumnName("lastName")
                    .HasColumnType("varchar(20)")
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        public DbSet<Employee> Employees { get; set; }
        
        public List<Employee> getEmployees () => Employees.ToList();

        public void AddEmployee(Employee employee)
        { 
            Employees.Add(employee);
            this.SaveChanges();
            return;
        }
    }
}
