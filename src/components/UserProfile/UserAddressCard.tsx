import { useState, useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

interface ContactDetails {
  collegeMainPhone: string;
  collegeSecondaryPhone: string;
  collegeFax: string;
  collegeEmail: string;
  collegeWebsite: string;
  admissionOffice: string;
  placementCell: string;
  libraryContact: string;
  hostelOffice: string;
  transportOffice: string;
  registrarOffice: string;
  principalOffice: string;
  accountsOffice: string;
  examinationCell: string;
}

interface AddressDetails {
  streetAddress: string;
  landmark: string;
  area: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  latitude: number;
  longitude: number;
  campus: string;
  building: string;
  floor: string;
  room: string;
}

export default function UserAddressCard() {
  const { isOpen, openModal, closeModal } = useModal();
  // Note: _setContactDetails will be used when API integration is complete
  const [contactDetails, _setContactDetails] = useState<ContactDetails>({
    collegeMainPhone: "",
    collegeSecondaryPhone: "",
    collegeFax: "",
    collegeEmail: "",
    collegeWebsite: "",
    admissionOffice: "",
    placementCell: "",
    libraryContact: "",
    hostelOffice: "",
    transportOffice: "",
    registrarOffice: "",
    principalOffice: "",
    accountsOffice: "",
    examinationCell: "",
  });
  // Note: _setAddressDetails will be used when API integration is complete
  const [addressDetails, _setAddressDetails] = useState<AddressDetails>({
    streetAddress: "",
    landmark: "",
    area: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
    latitude: 0,
    longitude: 0,
    campus: "",
    building: "",
    floor: "",
    room: "",
  });

  useEffect(() => {
    // TODO: Fetch contact details and address from API
    // Example API calls:
    // fetchContactDetails().then(_setContactDetails);
    // fetchAddressDetails().then(_setAddressDetails);
    
    // Note: _setContactDetails and _setAddressDetails will be used when API integration is complete
    // They are defined here to prepare for future API integration
    console.log("Component mounted, ready for API integration", { _setContactDetails, _setAddressDetails });
  }, [_setContactDetails, _setAddressDetails]);

  const GoogleMap = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    if (!latitude || !longitude) {
      return (
        <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Map will be displayed when location data is available</p>
        </div>
      );
    }

    return (
      <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${latitude},${longitude}&zoom=15`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="College Location"
        />
      </div>
    );
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">
              Contact Details
            </h4>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {/* Main College Contact */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-800 dark:text-white/90">Main College Contact</h5>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      College Main Phone
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.collegeMainPhone || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      College Email
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.collegeEmail || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      College Website
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.collegeWebsite || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      College Secondary Phone
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.collegeSecondaryPhone || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Offices */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-800 dark:text-white/90">Academic Offices</h5>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Admission Office
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.admissionOffice || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Principal Office
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.principalOffice || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Examination Cell
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.examinationCell || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Registrar Office
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.registrarOffice || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Services */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-800 dark:text-white/90">Support Services</h5>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Placement Cell
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.placementCell || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Library Contact
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.libraryContact || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Hostel Office
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.hostelOffice || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Transport Office
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.transportOffice || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Accounts Office
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.accountsOffice || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      College Fax
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {contactDetails.collegeFax || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              />
            </svg>
            Edit Contact
          </button>
        </div>
      </div>

      {/* Address & Location Card */}
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">
              Address & Location
            </h4>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Address Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Street Address
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.streetAddress || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Landmark
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.landmark || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Area
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.area || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      City
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.city || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      District
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.district || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      State
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.state || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      Country
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.country || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                      PIN Code
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {addressDetails.pincode || "Not provided"}
                    </p>
                  </div>
                </div>
                
                {/* Campus Details */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h5 className="text-sm font-medium text-gray-800 dark:text-white/90 mb-3">Campus Details</h5>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Campus
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {addressDetails.campus || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Building
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {addressDetails.building || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Floor
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {addressDetails.floor || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                        Room
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {addressDetails.room || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coordinates */}
                {(addressDetails.latitude || addressDetails.longitude) && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h5 className="text-sm font-medium text-gray-800 dark:text-white/90 mb-3">Coordinates</h5>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                          Latitude
                        </p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                          {addressDetails.latitude || "Not provided"}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                          Longitude
                        </p>
                        <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                          {addressDetails.longitude || "Not provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Google Map */}
              <div>
                <h5 className="text-sm font-medium text-gray-800 dark:text-white/90 mb-3">Location Map</h5>
                <GoogleMap latitude={addressDetails.latitude} longitude={addressDetails.longitude} />
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              />
            </svg>
            Edit Address
          </button>
        </div>
      </div>
      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Contact & Address Details
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your college contact and address details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto custom-scrollbar">
              {/* Contact Details Section */}
              <div className="mb-8">
                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                  Contact Details
                </h5>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>College Main Phone</Label>
                    <Input type="text" value={contactDetails.collegeMainPhone} />
                  </div>
                  <div>
                    <Label>College Secondary Phone</Label>
                    <Input type="text" value={contactDetails.collegeSecondaryPhone} />
                  </div>
                  <div>
                    <Label>College Email</Label>
                    <Input type="email" value={contactDetails.collegeEmail} />
                  </div>
                  <div>
                    <Label>College Website</Label>
                    <Input type="url" value={contactDetails.collegeWebsite} />
                  </div>
                  <div>
                    <Label>Admission Office</Label>
                    <Input type="text" value={contactDetails.admissionOffice} />
                  </div>
                  <div>
                    <Label>Placement Cell</Label>
                    <Input type="text" value={contactDetails.placementCell} />
                  </div>
                  <div>
                    <Label>Library Contact</Label>
                    <Input type="text" value={contactDetails.libraryContact} />
                  </div>
                  <div>
                    <Label>Hostel Office</Label>
                    <Input type="text" value={contactDetails.hostelOffice} />
                  </div>
                  <div>
                    <Label>Transport Office</Label>
                    <Input type="text" value={contactDetails.transportOffice} />
                  </div>
                  <div>
                    <Label>Registrar Office</Label>
                    <Input type="text" value={contactDetails.registrarOffice} />
                  </div>
                  <div>
                    <Label>Principal Office</Label>
                    <Input type="text" value={contactDetails.principalOffice} />
                  </div>
                  <div>
                    <Label>Accounts Office</Label>
                    <Input type="text" value={contactDetails.accountsOffice} />
                  </div>
                  <div>
                    <Label>Examination Cell</Label>
                    <Input type="text" value={contactDetails.examinationCell} />
                  </div>
                  <div>
                    <Label>College Fax</Label>
                    <Input type="text" value={contactDetails.collegeFax} />
                  </div>
                </div>
              </div>

              {/* Address Details Section */}
              <div className="mb-6">
                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                  Address Details
                </h5>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Street Address</Label>
                    <Input type="text" value={addressDetails.streetAddress} />
                  </div>
                  <div>
                    <Label>Landmark</Label>
                    <Input type="text" value={addressDetails.landmark} />
                  </div>
                  <div>
                    <Label>Area</Label>
                    <Input type="text" value={addressDetails.area} />
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input type="text" value={addressDetails.city} />
                  </div>
                  <div>
                    <Label>District</Label>
                    <Input type="text" value={addressDetails.district} />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input type="text" value={addressDetails.state} />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input type="text" value={addressDetails.country} />
                  </div>
                  <div>
                    <Label>PIN Code</Label>
                    <Input type="text" value={addressDetails.pincode} />
                  </div>
                  <div>
                    <Label>Campus</Label>
                    <Input type="text" value={addressDetails.campus} />
                  </div>
                  <div>
                    <Label>Building</Label>
                    <Input type="text" value={addressDetails.building} />
                  </div>
                  <div>
                    <Label>Floor</Label>
                    <Input type="text" value={addressDetails.floor} />
                  </div>
                  <div>
                    <Label>Room</Label>
                    <Input type="text" value={addressDetails.room} />
                  </div>
                  <div>
                    <Label>Latitude</Label>
                    <Input type="number" value={addressDetails.latitude.toString()} />
                  </div>
                  <div>
                    <Label>Longitude</Label>
                    <Input type="number" value={addressDetails.longitude.toString()} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
