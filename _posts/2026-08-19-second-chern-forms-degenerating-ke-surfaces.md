---
layout: paper
title: "On asymptotic behavior of the second Chern forms on degenerating Kähler-Einstein surfaces"
title_ja: "退化するKähler–Einstein曲面上の第2 Chern形式の漸近挙動"
authors: "Itsuki Tazoe"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We study an asymptotic behavior of the second Chern forms of canonical metrics on a degenerating family of Kähler surfaces with the central fibre having ADE-singularities. We investigate a function on the unit disc defined by fiber integrals of the forms with a smooth test function on the family. We show a lower bound of the Hölder exponent of the function at the origin. Our main results consists of two cases: one is a bound of Hölder exponent along a line for cscK-metrics, using Biquard-Rollin's a priori estimates for cscK-metrics, and the other is a bound of Hölder exponent at the origin for Ricci-flat metrics.
topic: differential-geometry
tags:
  - chern-classes
  - csck-extremal-kahler-metrics
  - kahler-einstein-metrics
  - calabi-yau-geometry
  - singularities
arxiv_id: "2505.01773v2"
arxiv_url: "https://arxiv.org/abs/2505.01773v2"
arxiv_submitted: "2025-05-03"
arxiv_updated: "2026-05-25"
summary: >-
  ADE特異点をもつ中心ファイバーへ退化するKähler曲面族で、標準計量の第2 Chern形式のファイバー積分がどの程度連続に延長するかを調べる。cscK計量では実半直線上、偏極K3曲面のRicci平坦計量では円板全体で、同時解消に必要な基底変換の次数を用いたHölder指数の下限を与える。
abstract_en: ""
summary_en: >-
  The paper analyzes fiber integrals of second Chern forms as Kähler surfaces degenerate to a central fiber with ADE singularities. It treats constant-scalar-curvature metrics along a real ray and Ricci-flat metrics on polarized K3 fibers over the punctured disc. Under simultaneous-resolution and nondegeneracy assumptions, the relevant integrals extend Hölder continuously. The lower exponent is expressed through the degree of the ramified base change used for the resolution.
abstract_ja: >-
  ADE特異点をもつ中心ファイバーへKähler曲面が退化するとき、標準計量の第2 Chern形式を滑らかな試験関数とともにファイバー積分して得られる関数の漸近挙動を研究する。cscK計量の場合にはBiquard–Rollinの先験評価を用いて実半直線上のHölder指数を評価し、Ricci平坦計量の場合には原点を含む円板上でHölder連続に延長できることを示す。
abstract_source_url: "https://arxiv.org/abs/2505.01773v2"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.01773v2](https://arxiv.org/abs/2505.01773v2)
- **著者:** Itsuki Tazoe
- **初回投稿日:** 2025年5月3日
- **最終更新日:** 2026年5月25日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな形式を固定して平坦族に沿って積分すると、その値は連続に変化することが知られている。本論文が扱うのは、積分される形式そのものが退化する標準計量から作られるため、中心ファイバーの近くで先験的な滑らかさをもたない場合である。

対象は、中心ファイバーがADE特異点をもつKähler曲面の平滑化である。滑らかな関数 $f$ と各ファイバーの標準計量 $g_t$ に対し、中心的な量は

$$
F(t)=\int_{X_t} f_t c_2(g_t)
$$

である。ここで $c_2(g_t)$ は接束の第2 Chern形式であり、局所的な曲率集中を試験関数で測っている。

主結果は二つある。一般のcscK計量族については、同時解消を与える次数 $d$ の分岐被覆と非退化性を仮定し、正の実半直線に沿って $F$ が少なくとも指数 $1/d$ でHölder連続に延長する。偏極K3曲面のRicci平坦計量については、同様の指数を円板全体で得る。

したがって、定理は単なる弱収束ではなく、第2 Chern形式の局所積分が特異ファイバーへ近づく速度を定量化する。二つのケースでは近似計量の作り方と利用できる評価が異なることにも注意が必要である。

## 背景と問題設定

Kingの連続性定理やBarletの漸近展開は、積分する形式に連続性または滑らかさを課す。一方、退化族上のKähler–Einstein計量やcscK計量は中心の近くで滑らかな相対接束計量から来るとは限らない。本論文は、積分対象を標準計量の特性形式として自然に選ぶ代わりに、その正則性を幾何学的評価から導く。

ADE特異点の局所模型は $\mathbb C^2/\Gamma$ であり、同時解消後にはKronheimerのALE重力インスタントンがバブル模型を与える。分岐被覆 $\Delta_d\to\Delta$ の次数 $d$ が、中心に近づく自然なスケールと最終的なHölder指数に現れる。

## 主結果

### cscK計量の場合（Theorem 7）

結論は、実半直線上の $F(t)$ が $t=0$ までHölder連続に延長し、その指数が少なくとも $1/d$ であるというものである。対象はADE特異点を一つ含む中心曲面の平滑化で、次数 $d$ の基底変換後の同時解消、当該特異点での実半直線方向の非退化性、各滑らかなファイバー上の指定Kähler類に属するcscK計量を仮定する。試験関数の台はその特異点だけを含む。

### Ricci平坦K3計量の場合（Theorem 9）

偏極K3曲面の平坦固有族で、中心だけがADE特異点をもち、次数 $d$ の基底変換後に極小同時解消が存在し、注目する特異点で非退化であるとする。このとき偏極類内のRicci平坦計量 $\hat g_t$ に対する

$$
F(t)=\int_{X_t} f_t c_2(\hat g_t)
$$

は穿孔円板から円板全体へ、少なくとも指数 $1/d$ のHölder連続関数として延長する。cscKの場合の半直線上の評価を、Ricci平坦性の追加構造によって複素パラメータの全方向へ強めた結果である。

## 証明の見取り図

cscKの場合には、Biquard–RollinによるcscK方程式の先験評価を使う。まずADE平滑化の局所ALE模型からcscK計量を近似する計量族を構成し、近似計量との差を制御することで第2 Chern形式の積分を評価する。

Ricci平坦K3の場合には、実際のRicci平坦計量を距離構造だけでなくRicci曲率についてもよく近似する「ほとんどRicci平坦」なKähler計量を構成する。この追加制御によって、半直線に限らない円板上の評価へ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2505.01773v2](https://arxiv.org/abs/2505.01773v2)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 7, Theorem 9
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
