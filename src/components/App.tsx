import { useLaunchParams, miniApp, useSignal, viewport } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';
import { Footer } from './Footer';
import { useEffect } from 'react';
import { FOOTER_ITEMS } from './Footer/conts';

export function App() {
    const lp = useLaunchParams();
    const isDark = useSignal(miniApp.isDark);

    useEffect(() => {
        viewport.expand();
    }, []);

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}>
            <HashRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer items={FOOTER_ITEMS} />
            </HashRouter>
        </AppRoot>
    );
}
