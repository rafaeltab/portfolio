export function Colors(props: { theme: string }) {
  const colors: Record<string, Color[]> = {
    backgrounds: [
      {
        name: "Background 1",
        variable: "--ds-background-1",
        className: "bg-red-400",
      },
      {
        name: "Background 2",
        variable: "--ds-background-2",
        className: "bg-red-500",
      },
    ],
    gray: [
      {
        name: "--gray-bg-default",
        variable: "--gray-bg-default",
        className: "bg-gray-bg-default"
      },
      {
        name: "--gray-bg-hover",
        variable: "--gray-bg-hover",
        className: "bg-gray-bg-hover"
      },
      {
        name: "--gray-bg-active",
        variable: "--gray-bg-active",
        className: "bg-gray-bg-active"
      },
      {
        name: "--gray-border-default",
        variable: "--gray-border-default",
        className: "bg-gray-border-default"
      },
      {
        name: "--gray-border-hover",
        variable: "--gray-border-hover",
        className: "bg-gray-border-hover"
      },
      {
        name: "--gray-border-active",
        variable: "--gray-border-active",
        className: "bg-gray-border-active"
      },
      {
        name: "--gray-bg-hc",
        variable: "--gray-bg-hc",
        className: "bg-gray-bg-hc"
      },
      {
        name: "--gray-bg-hc-hover",
        variable: "--gray-bg-hc-hover",
        className: "bg-gray-bg-hc-hover"
      },
      {
        name: "--gray-secondary",
        variable: "--gray-secondary",
        className: "bg-gray-secondary"
      },
      {
        name: "--gray-primary",
        variable: "--gray-primary",
        className: "bg-gray-primary"
      },
    ],
    blue: [
      {
        name: "--blue-bg-default",
        variable: "--blue-bg-default",
        className: "bg-blue-bg-default"
      },
      {
        name: "--blue-bg-hover",
        variable: "--blue-bg-hover",
        className: "bg-blue-bg-hover"
      },
      {
        name: "--blue-bg-active",
        variable: "--blue-bg-active",
        className: "bg-blue-bg-active"
      },
      {
        name: "--blue-border-default",
        variable: "--blue-border-default",
        className: "bg-blue-border-default"
      },
      {
        name: "--blue-border-hover",
        variable: "--blue-border-hover",
        className: "bg-blue-border-hover"
      },
      {
        name: "--blue-border-active",
        variable: "--blue-border-active",
        className: "bg-blue-border-active"
      },
      {
        name: "--blue-bg-hc",
        variable: "--blue-bg-hc",
        className: "bg-blue-bg-hc"
      },
      {
        name: "--blue-bg-hc-hover",
        variable: "--blue-bg-hc-hover",
        className: "bg-blue-bg-hc-hover"
      },
      {
        name: "--blue-secondary",
        variable: "--blue-secondary",
        className: "bg-blue-secondary"
      },
      {
        name: "--blue-primary",
        variable: "--blue-primary",
        className: "bg-blue-primary"
      }
    ],
    red: [
      {
        name: "--red-bg-default",
        variable: "--red-bg-default",
        className: "bg-red-bg-default"
      },
      {
        name: "--red-bg-hover",
        variable: "--red-bg-hover",
        className: "bg-red-bg-hover"
      },
      {
        name: "--red-bg-active",
        variable: "--red-bg-active",
        className: "bg-red-bg-active"
      },
      {
        name: "--red-border-default",
        variable: "--red-border-default",
        className: "bg-red-border-default"
      },
      {
        name: "--red-border-hover",
        variable: "--red-border-hover",
        className: "bg-red-border-hover"
      },
      {
        name: "--red-border-active",
        variable: "--red-border-active",
        className: "bg-red-border-active"
      },
      {
        name: "--red-bg-hc",
        variable: "--red-bg-hc",
        className: "bg-red-bg-hc"
      },
      {
        name: "--red-bg-hc-hover",
        variable: "--red-bg-hc-hover",
        className: "bg-red-bg-hc-hover"
      },
      {
        name: "--red-secondary",
        variable: "--red-secondary",
        className: "bg-red-secondary"
      },
      {
        name: "--red-primary",
        variable: "--red-primary",
        className: "bg-red-primary"
      }
    ],
    amber: [
      {
        name: "--amber-bg-default",
        variable: "--amber-bg-default",
        className: "bg-amber-bg-default"
      },
      {
        name: "--amber-bg-hover",
        variable: "--amber-bg-hover",
        className: "bg-amber-bg-hover"
      },
      {
        name: "--amber-bg-active",
        variable: "--amber-bg-active",
        className: "bg-amber-bg-active"
      },
      {
        name: "--amber-border-default",
        variable: "--amber-border-default",
        className: "bg-amber-border-default"
      },
      {
        name: "--amber-border-hover",
        variable: "--amber-border-hover",
        className: "bg-amber-border-hover"
      },
      {
        name: "--amber-border-active",
        variable: "--amber-border-active",
        className: "bg-amber-border-active"
      },
      {
        name: "--amber-bg-hc",
        variable: "--amber-bg-hc",
        className: "bg-amber-bg-hc"
      },
      {
        name: "--amber-bg-hc-hover",
        variable: "--amber-bg-hc-hover",
        className: "bg-amber-bg-hc-hover"
      },
      {
        name: "--amber-secondary",
        variable: "--amber-secondary",
        className: "bg-amber-secondary"
      },
      {
        name: "--amber-primary",
        variable: "--amber-primary",
        className: "bg-amber-primary"
      }
    ],
    green: [
      {
        name: "--green-bg-default",
        variable: "--green-bg-default",
        className: "bg-green-bg-default"
      },
      {
        name: "--green-bg-hover",
        variable: "--green-bg-hover",
        className: "bg-green-bg-hover"
      },
      {
        name: "--green-bg-active",
        variable: "--green-bg-active",
        className: "bg-green-bg-active"
      },
      {
        name: "--green-border-default",
        variable: "--green-border-default",
        className: "bg-green-border-default"
      },
      {
        name: "--green-border-hover",
        variable: "--green-border-hover",
        className: "bg-green-border-hover"
      },
      {
        name: "--green-border-active",
        variable: "--green-border-active",
        className: "bg-green-border-active"
      },
      {
        name: "--green-bg-hc",
        variable: "--green-bg-hc",
        className: "bg-green-bg-hc"
      },
      {
        name: "--green-bg-hc-hover",
        variable: "--green-bg-hc-hover",
        className: "bg-green-bg-hc-hover"
      },
      {
        name: "--green-secondary",
        variable: "--green-secondary",
        className: "bg-green-secondary"
      },
      {
        name: "--green-primary",
        variable: "--green-primary",
        className: "bg-green-primary"
      }
    ],
    teal: [
      {
        name: "--teal-bg-default",
        variable: "--teal-bg-default",
        className: "bg-teal-bg-default"
      },
      {
        name: "--teal-bg-hover",
        variable: "--teal-bg-hover",
        className: "bg-teal-bg-hover"
      },
      {
        name: "--teal-bg-active",
        variable: "--teal-bg-active",
        className: "bg-teal-bg-active"
      },
      {
        name: "--teal-border-default",
        variable: "--teal-border-default",
        className: "bg-teal-border-default"
      },
      {
        name: "--teal-border-hover",
        variable: "--teal-border-hover",
        className: "bg-teal-border-hover"
      },
      {
        name: "--teal-border-active",
        variable: "--teal-border-active",
        className: "bg-teal-border-active"
      },
      {
        name: "--teal-bg-hc",
        variable: "--teal-bg-hc",
        className: "bg-teal-bg-hc"
      },
      {
        name: "--teal-bg-hc-hover",
        variable: "--teal-bg-hc-hover",
        className: "bg-teal-bg-hc-hover"
      },
      {
        name: "--teal-secondary",
        variable: "--teal-secondary",
        className: "bg-teal-secondary"
      },
      {
        name: "--teal-primary",
        variable: "--teal-primary",
        className: "bg-teal-primary"
      }
    ],
    purple: [
      {
        name: "--purple-bg-default",
        variable: "--purple-bg-default",
        className: "bg-purple-bg-default"
      },
      {
        name: "--purple-bg-hover",
        variable: "--purple-bg-hover",
        className: "bg-purple-bg-hover"
      },
      {
        name: "--purple-bg-active",
        variable: "--purple-bg-active",
        className: "bg-purple-bg-active"
      },
      {
        name: "--purple-border-default",
        variable: "--purple-border-default",
        className: "bg-purple-border-default"
      },
      {
        name: "--purple-border-hover",
        variable: "--purple-border-hover",
        className: "bg-purple-border-hover"
      },
      {
        name: "--purple-border-active",
        variable: "--purple-border-active",
        className: "bg-purple-border-active"
      },
      {
        name: "--purple-bg-hc",
        variable: "--purple-bg-hc",
        className: "bg-purple-bg-hc"
      },
      {
        name: "--purple-bg-hc-hover",
        variable: "--purple-bg-hc-hover",
        className: "bg-purple-bg-hc-hover"
      },
      {
        name: "--purple-secondary",
        variable: "--purple-secondary",
        className: "bg-purple-secondary"
      },
      {
        name: "--purple-primary",
        variable: "--purple-primary",
        className: "bg-purple-primary"
      }
    ],
    pink: [
      {
        name: "--pink-bg-default",
        variable: "--pink-bg-default",
        className: "bg-pink-bg-default"
      },
      {
        name: "--pink-bg-hover",
        variable: "--pink-bg-hover",
        className: "bg-pink-bg-hover"
      },
      {
        name: "--pink-bg-active",
        variable: "--pink-bg-active",
        className: "bg-pink-bg-active"
      },
      {
        name: "--pink-border-default",
        variable: "--pink-border-default",
        className: "bg-pink-border-default"
      },
      {
        name: "--pink-border-hover",
        variable: "--pink-border-hover",
        className: "bg-pink-border-hover"
      },
      {
        name: "--pink-border-active",
        variable: "--pink-border-active",
        className: "bg-pink-border-active"
      },
      {
        name: "--pink-bg-hc",
        variable: "--pink-bg-hc",
        className: "bg-pink-bg-hc"
      },
      {
        name: "--pink-bg-hc-hover",
        variable: "--pink-bg-hc-hover",
        className: "bg-pink-bg-hc-hover"
      },
      {
        name: "--pink-secondary",
        variable: "--pink-secondary",
        className: "bg-pink-secondary"
      },
      {
        name: "--pink-primary",
        variable: "--pink-primary",
        className: "bg-pink-primary"
      }
    ],
  };


  return (
    <div className="flex-col flex">
      {Object.entries(colors).map(([name, colorList]: [string, Color[]]) => (
        <div key={name}>
          <h1>{name}</h1>
          <div className="flex-row flex gap-1">
            {colorList.map((color) => <ColorBox key={color.name} colorClass={color.className} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function ColorBox(props: { colorClass: string }) {
  return <div className={"w-20 h-12 rounded-md border border-gray-border-default " + props.colorClass}></div>;
}

type Color = {
  name: string;
  variable: string;
  className: string;
};
