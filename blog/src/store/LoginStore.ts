import create from 'zustand';

interface Session {
    sessionId: string;
    setSessionId: (page: string) => void;
}

export const usePageStore = create<Session>((set) => ({
    sessionId: '', // 기본 페이지 설정
    setSessionId: (newSessionId: string) => set({sessionId: newSessionId}),
}));
