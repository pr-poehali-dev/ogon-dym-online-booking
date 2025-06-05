import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Booking = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Icon name="Calendar" size={24} />
              Бронирование столика
            </CardTitle>
            <p className="text-muted-foreground">
              Заполните форму и мы свяжемся с вами для подтверждения
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Дата</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="time">Время</Label>
                <Input id="time" type="time" />
              </div>
            </div>

            <div>
              <Label htmlFor="guests">Количество гостей</Label>
              <Input id="guests" type="number" min="1" placeholder="2" />
            </div>

            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea
                id="comment"
                placeholder="Особые пожелания или комментарии"
                rows={3}
              />
            </div>

            <Button className="w-full" size="lg">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Booking;
