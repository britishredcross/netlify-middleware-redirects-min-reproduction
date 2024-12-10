
import { NextResponse, type NextRequest } from "next/server";

const availableLocales = ["en"];
const DEFAULT_LOCALE = "en";

const getLocaleInUrlPath = (path: string): string | undefined => {
	const locale = path.split("/")[1] ?? "";
	if (locale.length > 0 && availableLocales.includes(locale))
		return locale;
	return undefined;
};

export const middleware = async (
	request: NextRequest
): Promise<NextResponse> => {
	
	const locale = getLocaleInUrlPath(request.nextUrl.pathname);
	if (!locale) {
		request.nextUrl.pathname = `/${DEFAULT_LOCALE}${request.nextUrl.pathname}`;
		return NextResponse.rewrite(request.nextUrl);
	}

	return NextResponse.next();
};
