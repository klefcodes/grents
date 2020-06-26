interface AddRestaurantProps {
  onAddRestaurant: ({ name }: { name: string }) => Promise<void>;
}

export default AddRestaurantProps;
