﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

[assembly: System.CodeDom.Compiler.GeneratedCodeAttribute("ASP.NET", "4.0.30319.42000")]
[assembly: System.Security.SecurityRulesAttribute(System.Security.SecurityRuleSet.Level2)]
[assembly: System.Runtime.Versioning.TargetFrameworkAttribute(".NETFramework,Version=v4.7.2")]

namespace @__ASP {
    
    
    internal class FastObjectFactory_app_global_asax_c2_rmcn5 {
        
        
        #line 1 "c:\\dummy.txt"

        #line default
        #line hidden
        
        
        private FastObjectFactory_app_global_asax_c2_rmcn5() {
        }
        
        static object Create_ASP_global_asax() {
            System.IServiceProvider @__activator;
            @__activator = System.Web.HttpRuntime.WebObjectActivator;
            if ((@__activator != null)) {
                return @__activator.GetService(typeof(ASP.global_asax));
            }
            else {
                return new ASP.global_asax();
            }
        }
    }
}
