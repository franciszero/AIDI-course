/*
 * An Angular service which helps with creating recursive directives.
 * @author Mark Lagendijk
 * @license MIT
 */
const a="ultra.service.RecursionHelper",o="recursionHelper";
/**
 * An Angular service which helps with creating recursive directives.
 * @author Mark Lagendijk
 * @license MIT
 *
 * Sample usage:
 * ```typescript
 *
 * var link = (scope: IScope, element: JQuery) => {
 *   // do stuff
 * };
 *
 * var compile = (element: JQuery) => {
 *   return recursiveHelper.compile(element, link);
 * };
 *
 * ```
 *
 */