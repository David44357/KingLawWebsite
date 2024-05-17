import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
const joinTheBetaFormSchema = Yup
  .object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is Required"),
  }).required()
export const JoinTheBetaListModal = (props) => {
  // export default function JoinTheBetaListModal() {
  // let [isOpen, setIsOpen] = useState(true)
  const {isOpen, setIsOpen} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [apiMsg, setApiMsg] = useState('');
  const [isApiError, setIsApiError] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }

  // function openModal() {
  //   setIsOpen(true)
  // }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(joinTheBetaFormSchema),
  });
  const onSubmit = async (values) => {
    console.log("data in onSubmit", values);
    setIsLoading(true);
    setApiMsg("");
    setIsApiError(false);
    const objPostData = {
      ...values
    };
    try {
      const response = await fetch('/api/myEndpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objPostData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      const data = await response.json();
      console.log('Response data:', data);
      setIsLoading(false);
      setIsApiError(false);
      setApiMsg("Your request has been sent successfully, we will get back to you shortly.")
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setIsLoading(false);
      setIsApiError(true);
      setApiMsg("Error in sending the request, Please try again.")
    }
  }
  // const btnOnClickSubmitJoinTheBeta = () => {
    
  // }
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Join the beta
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      By joinig our beta, you will get early access of our apps.
                    </p>
                  </div>
                  <form className="tw-mt-4 tw-mb-2 tw-mx-auto tw-w-50 tw-max-w-screen-lg" >
                    <div class="max-w-sm">
                      <label for="tetEmailJoinBetaList" class="block text-sm font-medium mb-2">Email</label>
                      <input type="email" id="tetEmailJoinBetaList" 
                        class="" 
                        className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${errors.email &&
                          "!border-solid !border-red-300 !border-1"}`}
                        placeholder="Email" 
                        {
                          ...register("email")
                        }
                      />
                      {errors.email && (
                        <div className="text-xs mt-1 text-red-500">{errors.email.message}</div>
                      )}
                    </div>
                    {
                      apiMsg !== "" ?
                      <>
                        {
                          isApiError ?
                          <div className="mt-4 text-left">
                            <p className='text-red-500'>{apiMsg}</p>
                          </div>
                          : 
                          <div className="mt-4 text-left">
                            <p className='text-green-300'>{apiMsg}</p>
                          </div>
                        }
                      </>
                      :
                        null
                    }
                    {
                      isLoading === false ?
                        <div className="mt-4 text-right">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            // onClick={closeModal}
                            onClick={() => {
                              // btnOnClickSubmitJoinTheBeta()
                              handleSubmit(onSubmit)();
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      : 
                      <div className="mt-4 text-right">
                        <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite] text-blue-300" role="status">
                          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                      </div>

                    }
                    
                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default JoinTheBetaListModal;