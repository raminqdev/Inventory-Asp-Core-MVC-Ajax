﻿using AspNetCore.Lib.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Inventory_Asp_Core_MVC_Ajax.Api.Middlewares
{
    public class RequestPerformanceBehaviourMiddleware
    {
        private readonly RequestDelegate _next;

        public RequestPerformanceBehaviourMiddleware(RequestDelegate next) => _next = next;

        public async Task InvokeAsync(HttpContext context)
        {
            var _timer = Stopwatch.StartNew();

            await _next(context);

            _timer.Stop();

            if (_timer.ElapsedMilliseconds > 500)
            {
                ((ILogger)context.RequestServices.GetService(typeof(ILogger)))
                    .Warn($"Long Running Request:   " +
                        $" ({_timer.ElapsedMilliseconds} milliseconds)" +
                        $"  Request Path: {context.Request.Path}");

            }
        }
    }
}
