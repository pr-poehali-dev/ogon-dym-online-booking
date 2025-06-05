import Layout from "@/components/Layout";
import YClientsWidget from "@/components/YClientsWidget";

const Booking = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <YClientsWidget title="Бронирование столика" height={700} />
      </div>
    </Layout>
  );
};

export default Booking;
