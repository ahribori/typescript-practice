interface IReservation {
  startTime: string;
  endTime: string;
}

interface IParsedTime {
  hour: number;
  minutes: number;
}

const reservations: Array<IReservation> = [
  {
    startTime: '10:00:00',
    endTime: '12:00:00',
  },
  {
    startTime: '10:00:00',
    endTime: '12:00:00',
  },
  {
    startTime: '11:00:00',
    endTime: '12:00:00',
  },
  {
    startTime: '12:00:00',
    endTime: '13:30:00',
  },
];

const parseTime = (timeString: string): IParsedTime => {
  const [hour, minutes] = timeString.split(':');
  return {
    hour: parseInt(hour),
    minutes: parseInt(minutes),
  };
};

const parsedStartTimes: Array<IParsedTime> = reservations.map(
  (reservation: IReservation) => {
    return parseTime(reservation.startTime);
  },
);

const parsedEndTimes: Array<IParsedTime> = reservations.map(
  (reservation: IReservation) => {
    return parseTime(reservation.endTime);
  },
);
