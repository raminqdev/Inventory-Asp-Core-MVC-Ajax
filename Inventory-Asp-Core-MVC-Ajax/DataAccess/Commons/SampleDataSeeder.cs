﻿using AspNetCore.Lib.Services.Interfaces;
using Inventory_Asp_Core_MVC_Ajax.DataAccess.EFModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Inventory_Asp_Core_MVC_Ajax.DataAccess.Commons
{
    public interface ISampleDataSeeder
    {
        Task SeedAllAsync(CancellationToken cancellationToken);
    }

    public class SampleDataSeeder : ISampleDataSeeder
    {
        private readonly IRepository _repository;
        private readonly InventoryDbContext _dbcontext;
        private readonly ISerializerService _serializer;
        private readonly ILogger _logger;


        public SampleDataSeeder(IRepository repository, InventoryDbContext dbcontext,
            ISerializerService serializer, ILogger logger)
        {
            _repository = repository;
            _dbcontext = dbcontext;
            _serializer = serializer;
            _logger = logger;
        }
        public async Task SeedAllAsync(CancellationToken cancellationToken)
        {
            if (_dbcontext.Storages.Any())
            {
                return;
            }
            var result = await _repository.CountAllAsync<Storage>();
            if (result.Data == 0)
            {
                //-----------Request for image------------//
                //var tasks = new ConcurrentBag<Task<Result<Image>>>();
                //for (int i = 0; i < 30; i++)
                //{
                //    tasks.Add(new InventoryHttpClient(_serializer, _logger).SendHttpRequestToGetImageByteArray());
                //    Thread.Sleep(50);
                //}
                //await Task.WhenAll(tasks);

                //string path = Path.Combine(Environment.CurrentDirectory, "wwwroot/seeddata/image.json");
                //var imageJsonArray = _serializer.SerializeToJson(tasks
                //    .Where(t => t.Result.Success).Select(t => t.Result.Data).ToList())
                //    .Replace("}", "}" + Environment.NewLine);
                //await File.AppendAllTextAsync(path, imageJsonArray);
                //---------- Request for image------------//

                var business = new Business()
                {
                    Id = new Guid("AB28B6D7-C9E8-43DC-8F72-4B97F77399AB"),
                    Name = "Pamir",
                    Phone = "021-211232",
                    EmergencyMobile = "0912-233423",
                    Fax = "32332323",
                    Addresses = new List<Address>(){new Address()
                                    {
                                        Country="Iran",
                                        City="Tehran",
                                        Region="Afsariye",
                                        Street="bahar 32",
                                        Number ="323",
                                        PostalCode="77828762"
                                    }
                        }
                };
                _repository.Add(business);
                await _repository.CommitAsync();
                _logger.Info($"business persisted ");

                string supplierFile = File.ReadAllText(Path.Combine(Environment.CurrentDirectory,
                    "wwwroot/seeddata/supplier.json"));
                string productFile = File.ReadAllText(Path.Combine(Environment.CurrentDirectory,
                    "wwwroot/seeddata/product.json"));
                string storageFile = File.ReadAllText(Path.Combine(Environment.CurrentDirectory,
                    "wwwroot/seeddata/storage.json"));
                string categoryFile = File.ReadAllText(Path.Combine(Environment.CurrentDirectory,
                    "wwwroot/seeddata/category.json"));
                string imageFile = File.ReadAllText(Path.Combine(Environment.CurrentDirectory,
                    "wwwroot/seeddata/image.json"));

                var suppliers = _serializer.DeserializeFromJson<IList<Supplier>>(supplierFile).ToList();
                var products = _serializer.DeserializeFromJson<IList<Product>>(productFile).ToList();
                var storages = _serializer.DeserializeFromJson<IList<Storage>>(storageFile).ToList();
                var categories = _serializer.DeserializeFromJson<IList<Category>>(categoryFile).ToList();
                var images = _serializer.DeserializeFromJson<IList<Image>>(imageFile).ToList();

                suppliers.ForEach(s =>
                {
                    s.BusinessId = new Guid("AB28B6D7-C9E8-43DC-8F72-4B97F77399AB");
                    _repository.Add(s);
                });
                await _repository.CommitAsync();
                _logger.Info($"suppliers persisted ");


                storages.ForEach(s =>
                {
                    s.BusinessId = new Guid("AB28B6D7-C9E8-43DC-8F72-4B97F77399AB");
                    _repository.Add(s);
                });
                await _repository.CommitAsync();
                _logger.Info($"storages persisted ");


                images.ForEach(s => _repository.Add(s));
                await _repository.CommitAsync();
                _logger.Info($"images persisted ");


                categories.ForEach(s =>
                {
                    s.BusinessId = new Guid("AB28B6D7-C9E8-43DC-8F72-4B97F77399AB");
                    _repository.Add(s);
                });
                await _repository.CommitAsync();
                _logger.Info($"categories persisted ");


                var storageIds = _dbcontext.Storages.Select(s => s.Id).ToList();
                var supplierIds = _dbcontext.Suppliers.Select(s => s.Id).ToList();
                var imageIds = _dbcontext.Images.Select(i => i.Id).ToList();
                var categoryIds = _dbcontext.Categories.Select(c => c.Id).ToList();

                products.ForEach(p =>
                {
                    p.BusinessId = new Guid("AB28B6D7-C9E8-43DC-8F72-4B97F77399AB");
                    p.ImageId = imageIds[new Random().Next(0, imageIds.Count())];
                    p.CategoryId = categoryIds[new Random().Next(0, categoryIds.Count())];
                    p.SupplierId = supplierIds[new Random().Next(0, supplierIds.Count())];
                    p.StorageId = storageIds[new Random().Next(0, storageIds.Count())];
                    _repository.Add(p);
                });
                await _repository.CommitAsync();
                _logger.Info($"products persisted ");
            }

        }

    }
}
