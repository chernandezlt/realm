import {createRealmContext} from '@realm/react';

const LeasesResponse = {
  name: 'LeasesResponse',
  properties: {
    id: 'string',
    length: 'string?',
    line: 'string?',
    notes: 'string?',
    prefix: 'string?',
    scac: 'string?',
    self: 'string?',
    type: 'string?',
  },
};

const SignaturesQueue = {
  name: 'SignaturesQueue',
  properties: {
    id: 'string?',
    signature: 'string?',
    loadId: 'string?',
    consecutive: 'int?',
    stopId: 'int?',
    driverId: 'string?',
    eventType: 'string?',
    departDate: 'string?',
    status: 'string?',
    siteKeys: 'string?',
    eventTypeKeys: 'string?',
    type: 'string?',
  },
};

const FilesQueue = {
  name: 'FilesQueue',
  properties: {
    id: 'string?',
    files: {type: 'list', objectType: 'File'},
    loadId: 'string?',
    consecutive: 'int?',
    driverId: 'string?',
    status: 'string?',
    type: 'string?',
  },
};

const File = {
  name: 'File',
  embedded: true,
  properties: {
    id: 'string?',
    file: 'string?',
  },
};

const StopAppointment = {
  name: 'StopAppointment',
  properties: {
    start: 'string?',
    end: 'string?',
    number: 'string?',
  },
};

const CompanyRules = {
  name: 'CompanyRules',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string?',
    role: 'string?',
    value: 'bool?',
  },
};

const Stops = {
  name: 'Stops',
  properties: {
    id: 'int',
    address: 'string?',
    appointmentAt: 'string?',
    arrivedAt: 'string?',
    canRedirect: 'bool?',
    city: 'string?',
    completed: 'int?',
    country: 'string?',
    departedAt: 'string?',
    latitude: 'string?',
    longitude: 'string?',
    name: 'string?',
    note: 'string?',
    scheduled: 'string?',
    signatureAt: 'date?',
    signatureRequired: 'bool?',
    siteId: 'string?',
    state: 'string?',
    status: 'string?',
    type: 'string?',
    zip: 'string?',
    appointment: 'StopAppointment?',
    geofence: 'string?',
  },
};

const LoadDocuments = {
  name: 'LoadDocuments',
  properties: {
    id: 'int',
    contentType: 'string',
    createdAt: 'date',
    documentType: 'string',
    key: 'string',
    loadId: 'string',
    name: 'string',
    updatedAt: 'date',
  },
};

const LoadErrors = {
  name: 'LoadErrors',
  properties: {
    id: 'int?',
    driverId: 'int?',
    key: 'string?',
    loadId: 'string?',
    message: 'string?',
  },
};

export const Load = {
  name: 'Load',
  primaryKey: 'loadKey',
  properties: {
    id: 'string',
    loadKey: 'string',
    acceptedAt: 'date?',
    accesorial: 'double?',
    amount: 'double?',
    bookingNumber: 'string?',
    chassis: 'string?',
    chassisAxles: 'int?',
    chassisId: 'string?',
    chassisLength: 'double?',
    chassisProvider: 'string?',
    chassisWidth: 'double?',
    comments: 'string?',
    completedAt: 'date?',
    consecutive: 'int?',
    container: 'string?',
    containerId: 'string?',
    containerLength: 'double?',
    containerWidth: 'double?',
    directionCode: 'string?',
    directionCodeDesc: 'string?',
    documents: {type: 'LoadDocuments[]', default: []},
    documentsQueue: 'FilesQueue[]',
    signaturesQueue: 'SignaturesQueue[]',
    driverId: 'int?',
    enteredAt: 'date?',
    errors: {type: 'LoadErrors[]', default: []},
    expedite: 'int?',
    externalId: 'string?',
    freight: 'double?',
    fuelSurcharge: 'double?',
    hasErrors: 'bool?',
    hazmat: 'int?',
    imageTypes: {type: 'string[]', default: []},
    lease: 'LeasesResponse?',
    masterBL: 'string?',
    orderNumber: 'string?',
    routeDate: 'string?',
    seal: 'string?',
    status: 'string?',
    stops: {type: 'Stops[]', default: []},
    pieces: 'int?',
    weight: 'double?',
    weightUnit: 'string?',
    position: 'int?',
    siteKeys: 'string?',
    eventTypeKeys: 'string?',
    lastUpdated: 'date?',
  },
};

export default createRealmContext({
  schema: [
    Load,
    LeasesResponse,
    LoadDocuments,
    LoadErrors,
    Stops,
    StopAppointment,
    CompanyRules,
    SignaturesQueue,
    FilesQueue,
    File,
  ],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
});
