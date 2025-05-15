type IconCloudItem = {
  iconPath: string;
  techName: string;
};

const icons: IconCloudItem[] = [
  { iconPath: "icons/aspnet.svg", techName: "ASP.NET" },
  { iconPath: "icons/dotnet.svg", techName: ".NET" },
  { iconPath: "icons/flutter.svg", techName: "Flutter" },
  { iconPath: "icons/angular.svg", techName: "Angular" },
  { iconPath: "icons/azure.svg", techName: "Azure" },
  { iconPath: "icons/azureDevOps.svg", techName: "Azure DevOps" },
  { iconPath: "icons/firebase.svg", techName: "Firebase" },
  { iconPath: "icons/mssql.svg", techName: "MSSQL" },
  { iconPath: "icons/kubernetes.svg", techName: "Kubernetes" },
  { iconPath: "icons/docker.svg", techName: "Docker" },
  { iconPath: "icons/powershell.svg", techName: "Powershell" },
  { iconPath: "icons/bicep.svg", techName: "Bicep" },
  { iconPath: "icons/turborepo.svg", techName: "Turborepo" },
];

export function iconCloud() {
  icons.keys();
}
