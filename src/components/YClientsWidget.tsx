import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface YClientsWidgetProps {
  title?: string;
  height?: number;
}

const YClientsWidget = ({
  title = "Онлайн запись",
  height = 600,
}: YClientsWidgetProps) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Инициализация виджета YClients
    if (
      typeof window !== "undefined" &&
      (window as any).YClientsWidget &&
      widgetRef.current
    ) {
      new (window as any).YClientsWidget({
        element: widgetRef.current,
        company_id: 1470467, // ID компании из URL
        width: "100%",
        height: height,
        locale: "ru",
        theme: "dark",
        show_header: false,
        show_services: true,
        show_staff: true,
        auto_select_single_service: false,
        auto_select_single_staff: false,
      });
    }
  }, [height]);

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Icon name="Calendar" size={24} />
          {title}
        </CardTitle>
        <p className="text-muted-foreground">
          Выберите удобное время и забронируйте столик
        </p>
      </CardHeader>
      <CardContent>
        <div
          ref={widgetRef}
          className="w-full rounded-lg overflow-hidden bg-background"
          style={{ minHeight: `${height}px` }}
        />
      </CardContent>
    </Card>
  );
};

export default YClientsWidget;
