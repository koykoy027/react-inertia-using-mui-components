import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FormHelperText, Button } from '@mui/material';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <>
            <div className="mb-5">
                <Typography variant="h6">Profile Information</Typography>
                <Typography variant="caption">
                    Update your account's profile information and email address.
                </Typography>
            </div>
            <form onSubmit={submit}>
                <div className="grid gap-4 lg:grid-cols-2">
                    <div>
                        <TextField
                            id="name"
                            label="Fullname"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            fullWidth
                        />
                        <FormHelperText>{errors.name}</FormHelperText>
                    </div>
                    <div>
                        <TextField
                            id="email"
                            label="Email address"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            fullWidth
                            type="email"
                        />
                        <FormHelperText>{errors.email}</FormHelperText>
                    </div>
                </div>
                <div className="flex justify-end my-5">
                    <Button variant="contained" color="primary" type="submit">
                        Submit changes
                    </Button>
                </div>
            </form>

            {/* <section className={className}>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">
                        Profile Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Update your account's profile information and email
                        address.
                    </p>
                </header>

                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            className="block w-full mt-1"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            className="block w-full mt-1"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="mt-2 text-sm text-gray-800">
                                Your email address is unverified.
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    as="button"
                                    className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification
                                    email.
                                </Link>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2 text-sm font-medium text-green-600">
                                    A new verification link has been sent to
                                    your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Saved.</p>
                        </Transition>
                    </div>
                </form>
            </section> */}
        </>
    );
}
