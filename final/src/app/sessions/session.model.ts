import { ISpeaker } from '../speakers/speaker.model';

export interface ISession {
    id: number,
    name: string,
    description: string,
    roomId: number,
    timeSlotId: number,
    timeslot: any,
    startTime: string,
    endTime: string,
    levelName: string,
    roomName: string,
    buildingName: string,
    isPrivate: boolean,
    isActive: boolean,
    speakers: ISpeaker[],
    sessionTime: string
}
