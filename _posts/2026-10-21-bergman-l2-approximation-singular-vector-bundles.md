---
layout: paper
title: Global $L^2$ Approximation in the Bergman Spaces with Values in Holomorphic Vector Bundles
title_ja: 特異Hermitianベクトル束値Bergman空間の大域L²近似
authors: Bo Xiao, Tianlong Yu
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this paper, we get global $L^2$ approximation theorems in Bergman spaces with values in singular holomorphic vector bundles over Stein manifolds generalizing results of Li and Zhou. The main results combine strong openness property of multiplier submodule sheaf and twisted $L^2$ estimates of $\bar\partial$-equations.
topic: several-complex-variables
tags:
- vector-bundles-sheaves
- l2-methods
- positivity
- stein-geometry
- multiplier-ideals-extension
arxiv_id: 2610.28273v1
arxiv_url: https://arxiv.org/abs/2610.28273
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: Stein多様体上の特異Nakano半正値ベクトル束について、単調に減少する計量に対応するBergman空間の和集合が極限の空間で稠密になる条件を示す。一般にはexhaustionによる重みを加え、hyperconvexの場合は追加の重みを不要にする。
abstract_en: In this paper, we get global $L^2$ approximation theorems in Bergman spaces with values in singular holomorphic vector bundles over Stein manifolds generalizing results of Li and Zhou. The main results combine strong openness property of multiplier submodule sheaf and twisted $L^2$ estimates of $\bar\partial$-equations.
summary_en: ''
abstract_ja: Stein多様体上の正則ベクトル束に、特異Nakano半正値計量の減少列とその極限を与えたとき、束値Bergman空間の大域L²近似を扱う。下に有界な多重劣調和exhaustionの重みを加えると稠密性が成り立ち、hyperconvex多様体では重みを加えずに成立する。強開性と重み付きL²可解性を用い、線束の場合と滑らかな増大近似を仮定する従来のベクトル束の場合を拡張する。
abstract_source_url: https://arxiv.org/abs/2610.28273
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28273v1](https://arxiv.org/abs/2610.28273)
- **著者:** Bo Xiao, Tianlong Yu
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

重み付きBergman空間は、二乗可積分な正則関数や正則切断からなるHilbert空間である。重みや計量を単調に変えて極限を取ったとき、途中の空間に属する切断で極限の空間の切断を近似できるかを考える。局所的な可積分性の改善だけでは、無限遠や境界まで含む大域近似は保証されない。

本論文は、特異Nakano半正値計量を持つ高階数の正則ベクトル束へ、この近似問題を拡張する。Stein多様体では適切なexhaustion重みを加えたBergman空間で稠密性を示す。より強いhyperconvex性を仮定すれば、追加の重みを外せる。

線束についてのLi–Zhouの結果や、滑らかなNakano半正値計量の増大近似を仮定するXiaoの先行結果との違いは、最適L²評価によって定義される、より一般の特異Nakano半正値計量を扱う点にある。滑らかな近似を最初から仮定しないことと、与えられた計量列の単調性を仮定することは別である。

## 背景と問題設定

正則束$E\to X$に対し、$A^2(X,K\_X\otimes E,h)$を$h$で二乗可積分な正則$E$値最高次形式の空間とする。線束のスカラー重みの場合、$\varphi\_j\uparrow\varphi$であっても、$\bigcup\_j A^2(D,\varphi\_j)$が$A^2(D,\varphi)$そのものになるとは限らない。論文は等しさではなく、Hilbert空間のノルムでの稠密性を問う。

強開性は局所的な可積分性を制御するが、その制御を大域的な$\bar\partial$方程式の解と組み合わせる必要がある。Introductionに現れるTheorems 1.1–1.4はこの問題の先行結果であり、本論文の主定理は1.5と1.6である。

## 主結果

### Stein多様体上の重み付き近似（Theorem 1.5）

$X$をKähler計量$\omega$を備えるStein多様体、$\Psi$を下に有界な多重劣調和exhaustionとする。$E$の計量$h\_k,h$が論文の最適L²評価による意味で特異Nakano半正値であり、任意の局所正則切断$v$について

$$
|v|\_{\omega,h\_k}\downarrow|v|\_{\omega,h}
$$

を仮定する。このとき

$$
\overline{\bigcup\_{k\ge1}A^2(X,K\_X\otimes E,h\_ke^{-\Psi})}^{\thinspace A^2(X,K\_X\otimes E,he^{-\Psi})}
=A^2(X,K\_X\otimes E,he^{-\Psi})
$$

である。閉包は右辺のHilbertノルムに関するもので、元の切断がある有限段階の空間に既に属するとは主張しない。

### hyperconvexの場合の重みなし近似（Theorem 1.6）

$X$がhyperconvexなら、同じ半正値性と局所切断ノルムの減少収束の仮定から

$$
\overline{\bigcup\_{j\ge1}A^2(X,K\_X\otimes E,h\_j)}^{\thinspace A^2(X,K\_X\otimes E,h)}
=A^2(X,K\_X\otimes E,h)
$$

が成り立つ。ここでIntroductionのhyperconvex性は、負の滑らかな狭義多重劣調和関数で負のsublevel集合が相対コンパクトになるものの存在を意味する。一般のSteinの場合とは異なり、追加因子$e^{-\Psi}$が不要になる。

## 証明の見取り図

特異ベクトル束では、滑らかな場合のtwisted Bochner–Kodaira–Nakano公式をそのまま使えない。Theorem 1.5では特異Nakano半正値性の定義に立ち返り、特別に選んだ重みで$\bar\partial$方程式を解く。Theorem 1.6では、線束に対するBerndtssonのtwisted L²評価を高階数へ拡張する。

両者とも乗数部分加群層の強開性を局所入力として用い、大域的な解の評価へ結びつける。Introductionはこの役割分担を説明しており、後続節の証明を再構成することなく、近似の局所部分と大域部分の接続を把握できる。

## 原論文との対応

- **Abstractページ:** [Global $L^2$ Approximation in the Bergman Spaces with Values in Holomorphic Vector Bundles](https://arxiv.org/abs/2610.28273)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28273v1) — Section 1, pp. 1–3。
- **Introduction中で言及された主要結果:** Theorems 1.5, 1.6。Theorems 1.1–1.4およびXiaoの無番号定理は先行結果。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28273v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
