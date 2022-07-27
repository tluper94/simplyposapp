const cartData = [
  {
    id: '563454354548884',
    item: 'Belton Burger',
    price: '12.95',
    modifiers: [],
    quantity: 2
  },
  {
    id: '783459546165',
    item: 'Single Plate',
    price: '12.95',
    modifiers: [],
    quantity: 1
  },
  {
    id: '9546873456874',
    item: 'Double Plate',
    price: '13.95',
    modifiers: [],
    quantity: 1
  },
  {
    id: '95548134524654',
    item: 'Grilled Chicken',
    price: '10.95',
    modifiers: [],
    quantity: 1
  },
  {
    id: '1565634534545454',
    item: '6oz Sirloin',
    price: '11.95',
    modifiers: [],
    quantity: 1
  },
  {
    id: '564548345887978884',
    item: 'Ribeye',
    price: '19.95',
    modifiers: [],
    quantity: 1
  },
  {
    id: '56454834534534884',
    item: 'Belton Burger',
    price: '12.95',
    modifiers: [],
    quantity: 2
  }
];

const store = {
  groupList: [
    {
      GroupID: 1000000001, // bigint, not null
      GroupName: 'Appetizers', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      ButtonColor: null, // int, null, button color override
      PictureName: '/storage/b40bd0d9-59fe-45da-a35c-510e4e8bb48e.jpg', // string, null, up to 500 char, gets the picture image file path that exists on aldelo cloud storage, the root is either the sandbox or production host, must past isv and store credentials in header like all other api calls for authentication
      DineInNotAvail: true, // bool, not null, value is true or false
      BarNotAvail: true, // bool, not null, value is true or false
      TakeOutNotAvail: true, // bool, not null, value is true or false
      DriveThruNotAvail: true, // bool, not null, value is true or false
      DeliveryNotAvail: true, // bool, not null, value is true or false
      RetailNotAvail: true, // bool, not null, value is true or false
      ScheduleNotAvail: true, // bool, not null, value is true or false
      Schedule: [
        {
          WeekDay: 0, // int, not null, 0=Everyday; 1=Monday; 2=Tuesday; 3=Wednesday; 4=Thursday; 5=Friday; 6=Saturday; 7=Sunday
          StartTime: '06:34', // datetime, not null, hh:mm with hh in 24 hour format
          StopTime: '10:34' // datetime, not null, hh:mm with hh in 24 hour format
        }
      ]
    },
    {
      GroupID: 1000000002, // bigint, not null
      GroupName: 'BBQ', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      ButtonColor: null, // int, null, button color override
      PictureName: '/storage/b40bd0d9-59fe-45da-a35c-510e4e8bb48e.jpg', // string, null, up to 500 char, gets the picture image file path that exists on aldelo cloud storage, the root is either the sandbox or production host, must past isv and store credentials in header like all other api calls for authentication
      DineInNotAvail: true, // bool, not null, value is true or false
      BarNotAvail: true, // bool, not null, value is true or false
      TakeOutNotAvail: true, // bool, not null, value is true or false
      DriveThruNotAvail: true, // bool, not null, value is true or false
      DeliveryNotAvail: true, // bool, not null, value is true or false
      RetailNotAvail: true, // bool, not null, value is true or false
      ScheduleNotAvail: true, // bool, not null, value is true or false
      Schedule: [
        {
          WeekDay: 0, // int, not null, 0=Everyday; 1=Monday; 2=Tuesday; 3=Wednesday; 4=Thursday; 5=Friday; 6=Saturday; 7=Sunday
          StartTime: '06:34', // datetime, not null, hh:mm with hh in 24 hour format
          StopTime: '10:34' // datetime, not null, hh:mm with hh in 24 hour format
        }
      ]
    },
    {
      GroupID: 1000000003, // bigint, not null
      GroupName: 'Kitchen', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      ButtonColor: null, // int, null, button color override
      PictureName: '/storage/b40bd0d9-59fe-45da-a35c-510e4e8bb48e.jpg', // string, null, up to 500 char, gets the picture image file path that exists on aldelo cloud storage, the root is either the sandbox or production host, must past isv and store credentials in header like all other api calls for authentication
      DineInNotAvail: true, // bool, not null, value is true or false
      BarNotAvail: true, // bool, not null, value is true or false
      TakeOutNotAvail: true, // bool, not null, value is true or false
      DriveThruNotAvail: true, // bool, not null, value is true or false
      DeliveryNotAvail: true, // bool, not null, value is true or false
      RetailNotAvail: true, // bool, not null, value is true or false
      ScheduleNotAvail: true, // bool, not null, value is true or false
      Schedule: [
        {
          WeekDay: 0, // int, not null, 0=Everyday; 1=Monday; 2=Tuesday; 3=Wednesday; 4=Thursday; 5=Friday; 6=Saturday; 7=Sunday
          StartTime: '06:34', // datetime, not null, hh:mm with hh in 24 hour format
          StopTime: '10:34' // datetime, not null, hh:mm with hh in 24 hour format
        }
      ]
    },
    {
      GroupID: 1000000004, // bigint, not null
      GroupName: 'Sandwiches', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      ButtonColor: null, // int, null, button color override
      PictureName: '/storage/b40bd0d9-59fe-45da-a35c-510e4e8bb48e.jpg', // string, null, up to 500 char, gets the picture image file path that exists on aldelo cloud storage, the root is either the sandbox or production host, must past isv and store credentials in header like all other api calls for authentication
      DineInNotAvail: true, // bool, not null, value is true or false
      BarNotAvail: true, // bool, not null, value is true or false
      TakeOutNotAvail: true, // bool, not null, value is true or false
      DriveThruNotAvail: true, // bool, not null, value is true or false
      DeliveryNotAvail: true, // bool, not null, value is true or false
      RetailNotAvail: true, // bool, not null, value is true or false
      ScheduleNotAvail: true, // bool, not null, value is true or false
      Schedule: [
        {
          WeekDay: 0, // int, not null, 0=Everyday; 1=Monday; 2=Tuesday; 3=Wednesday; 4=Thursday; 5=Friday; 6=Saturday; 7=Sunday
          StartTime: '06:34', // datetime, not null, hh:mm with hh in 24 hour format
          StopTime: '10:34' // datetime, not null, hh:mm with hh in 24 hour format
        }
      ]
    },
    {
      GroupID: 1000000005, // bigint, not null
      GroupName: 'Drinks', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      ButtonColor: null, // int, null, button color override
      PictureName: '/storage/b40bd0d9-59fe-45da-a35c-510e4e8bb48e.jpg', // string, null, up to 500 char, gets the picture image file path that exists on aldelo cloud storage, the root is either the sandbox or production host, must past isv and store credentials in header like all other api calls for authentication
      DineInNotAvail: true, // bool, not null, value is true or false
      BarNotAvail: true, // bool, not null, value is true or false
      TakeOutNotAvail: true, // bool, not null, value is true or false
      DriveThruNotAvail: true, // bool, not null, value is true or false
      DeliveryNotAvail: true, // bool, not null, value is true or false
      RetailNotAvail: true, // bool, not null, value is true or false
      ScheduleNotAvail: true, // bool, not null, value is true or false
      Schedule: [
        {
          WeekDay: 0, // int, not null, 0=Everyday; 1=Monday; 2=Tuesday; 3=Wednesday; 4=Thursday; 5=Friday; 6=Saturday; 7=Sunday
          StartTime: '06:34', // datetime, not null, hh:mm with hh in 24 hour format
          StopTime: '10:34' // datetime, not null, hh:mm with hh in 24 hour format
        }
      ]
    }
  ],

  itemList: [
    {
      ItemID: 2000000001, // bigint, not null
      ItemName: 'Belton Burger', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000004, // bigint, not null
      DefaultUnitPrice: 12.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000002, // bigint, not null
      ItemName: '1/2 Burger', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000004, // bigint, not null
      DefaultUnitPrice: 11.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000003, // bigint, not null
      ItemName: 'BBQ Sandwich', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000004, // bigint, not null
      DefaultUnitPrice: 12.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000004, // bigint, not null
      ItemName: '6oz Sirloin', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000003, // bigint, not null
      DefaultUnitPrice: 12.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000005, // bigint, not null
      ItemName: '8oz Sirloin', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000003, // bigint, not null
      DefaultUnitPrice: 13.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000006, // bigint, not null
      ItemName: 'Ribeye', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000003, // bigint, not null
      DefaultUnitPrice: 19.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000007, // bigint, not null
      ItemName: 'Dbl Plate', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000002, // bigint, not null
      DefaultUnitPrice: 12.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000008, // bigint, not null
      ItemName: 'Single Plate', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000002, // bigint, not null
      DefaultUnitPrice: 11.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000009, // bigint, not null
      ItemName: 'Trpl Plate', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000002, // bigint, not null
      DefaultUnitPrice: 13.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000010, // bigint, not null
      ItemName: '1/2 Cheese Fry', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000001, // bigint, not null
      DefaultUnitPrice: 5.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    },
    {
      ItemID: 2000000011, // bigint, not null
      ItemName: '1/2 Onion Ring', // string, not null, up to 100 char
      AlternateName: null, // string, null, up to 100 char
      GroupID: 1000000001, // bigint, not null
      DefaultUnitPrice: 6.95, // float, not null, 2 decimal spaces
      DineInUnitPrice: null, // float, null, 2 decimal spaces
      BarTabUnitPrice: null, // float, null, 2 decimal spaces
      TakeOutUnitPrice: null, // float, null, 2 decimal spaces
      DriveThruUnitPrice: null, // float, null, 2 decimal spaces
      DeliveryUnitPrice: null // float, null, 2 decimal spaces
    }
  ]
};

export { cartData, store };
