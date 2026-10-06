---
layout: paper
title: Rigidity of Extremal and cscK Bergman Metrics on Pseudoconvex Domains
title_ja: 擬凸領域のextremal・cscK Bergman計量の剛性
authors: Peter Ebenfelt, Soumya Ganguly
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: |-
  Let $\Omega\subset\mathbb C^n$, $n\ge2$, be a bounded connected pseudoconvex domain whose boundary contains a smooth strongly pseudoconvex point. We prove that if the Bergman metric of $\Omega$ is extremal, then its scalar curvature is identically $-n$, and that constant scalar curvature forces the Bergman metric to be K\"ahler--Einstein. Consequently, extremality, constant scalar curvature, and the K\"ahler--Einstein condition are equivalent in this setting. A key analytic ingredient is a local unique-continuation theorem for the Bergman Laplacian at an ACH boundary, proved using H\"ormander's Carleman estimate. We also obtain an extension for possibly unbounded pseudoconvex domains: if the Bergman metric is cscK or extremal near such a boundary point, then it is well-defined and K\"ahler--Einstein throughout the locus where $K_\Omega(z,z)>0$.
topic: several-complex-variables
tags:
- csck-extremal-kahler-metrics
- kahler-einstein-metrics
- curvature
arxiv_id: 2610.04590v1
arxiv_url: https://arxiv.org/abs/2610.04590
arxiv_submitted: '2026-10-03'
arxiv_updated: '2026-10-03'
summary: |-
  複素次元2以上の有界連結擬凸領域で、境界に滑らかな強擬凸点が一つあれば、Bergman計量のextremal性・定スカラー曲率・Kähler–Einstein性が同値になる。境界全体の滑らかさを仮定せず、局所的な境界漸近と一意接続を用いて大域的な曲率剛性を導く。
abstract_en: ''
summary_en: |-
  A local patch of boundary geometry is used to constrain the Bergman metric throughout a pseudoconvex domain. Conditions that differ for general Kähler metrics become equivalent under the hypotheses of the paper. The proof separates holomorphic uniqueness from a more delicate continuation argument for a scalar elliptic equation. An extension also addresses degeneracy of the Bergman kernel on unbounded domains.
abstract_ja: |-
  $n\geq2$ とし、境界に滑らかな強擬凸点を持つ有界連結擬凸領域 $\Omega\subset\mathbb C^n$ を考える。Bergman計量がextremalならスカラー曲率は恒等的に $-n$ となり、定スカラー曲率ならKähler–Einsteinとなることを示す。さらに非有界領域でも、強擬凸点の片側近傍でのextremal性から、Bergman核が正である部分全体でのKähler–Einstein性を導く。
abstract_source_url: https://arxiv.org/abs/2610.04590
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.04590v1](https://arxiv.org/abs/2610.04590)
- **著者:** Peter Ebenfelt, Soumya Ganguly
- **初回投稿日:** 2026-10-03
- **最終更新日:** 2026-10-03
- **主分類・副分類:** math.CV（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般のKähler計量では、Kähler–Einstein、定スカラー曲率、Calabiの意味でextremalという三つの条件は強さが異なる。本論文は、領域に付随する標準的なBergman計量について、この違いが消える状況を示す。

必要な境界仮定は局所的である。複素次元2以上の有界連結擬凸領域に滑らかな強擬凸境界点があれば、Bergman計量のextremal性だけからKähler–Einstein性まで導ける。境界全体が滑らかで強擬凸であるという仮定を要しない。

証明では二つの含意に異なる方法を使う。extremal性から定スカラー曲率を得る部分は正則ベクトル場の一意性を、そこからEinstein性へ進む部分は境界での無限次消滅とCarleman評価による一意接続を用いる。非有界領域では核や計量の退化に注意しながら結論を延長する。

## 背景と問題設定

Kähler計量がextremalであるとは、スカラー曲率の $(1,0)$ 勾配が正則であることをいう。一般には

<div>
$$
\text{Kähler–Einstein}\Longrightarrow
\text{cscK}\Longrightarrow\text{extremal}
$$
</div>

という含意があるが、逆向きは成立しない。論文はBergman計量 $g_B$ に対して逆向きを示す。

Introductionは、Bergman計量がEinsteinなら領域が球と双正則かというCheng–Yau予想と、本論文の曲率条件間の剛性を区別している。ここでの主結果だけから、一般の対象領域が球であるとは結論しない。また、複素次元 $n\geq3$ のcscKからEinsteinへの含意には独立なLi–Liuの研究との重なりがあることも明記される。

## 主結果

### 主定理：三つの曲率条件の同値（Theorem 1.1）

$\Omega\subset\mathbb C^n$、$n\geq2$ を、有界・連結・擬凸で、境界に滑らかな強擬凸点を持つ領域とする。このときBergman計量について

<div>
$$
g_B\text{ がextremal}
\quad\Longleftrightarrow\quad
g_B\text{ がcscK}
\quad\Longleftrightarrow\quad
g_B\text{ がKähler–Einstein}
$$
</div>

が成り立つ。仮定は強擬凸な局所境界片の存在であり、境界全体への正則性条件ではない。

### Extremal性から定曲率への段階（Theorem 1.2）

同じ仮定の下で $g_B$ がextremalなら、原論文の曲率の規約で

<div>
$$
\operatorname{Scal}(g_B)\equiv-n
$$
</div>

となる。単に何らかの定数であるだけでなく、その値も境界漸近から決定される。

### 定スカラー曲率からEinstein性への段階（Theorem 1.3）

同じ領域で $g_B$ が定スカラー曲率なら、

<div>
$$
\operatorname{Ric}(g_B)=-g_B
$$
</div>

となる。従ってEinstein定数は $-1$ である。Theorem 1.2とは別の解析的機構によって、Ricci曲率全体の形を決める。

### 非有界領域への拡張（Theorem 1.5）

有界性を外しても、連結擬凸領域の滑らかな強擬凸境界点 $p_0$ の片側近傍でBergman計量がextremalなら、その存在領域 $\Omega^*$ 全体で上の二つの曲率等式が成立する。さらに

<div>
$$
\Omega^*=\Omega_K
=\lbrace z\in\Omega\mid K_\Omega(z,z)>0\rbrace
$$
</div>

となる。$K_\Omega$ はBergman核である。核が消える点もあり得るため、計量が領域全体で無条件に非退化であるとは主張していない。

## 証明の見取り図

Extremalの場合、スカラー曲率の正則勾配が強擬凸境界片に近付くと0へ向かう。境界一意性と恒等定理からこのベクトル場が消え、境界漸近が定数値 $-n$ を決める。

cscKの場合には、正規化されたBergman不変量の対数がBergman Laplacianに関して調和になる。核の局所化とFefferman展開、indicial解析から境界での無限次消滅を得て、漸近複素双曲型（ACH）の境界における局所一意接続を適用する。接方向に局所化したCarleman重みとHörmanderの評価が、その主要な解析的道具である。

非有界の場合には、核の零点集合を越えて不変量の商をそのまま延長せず、分母を払った実解析的恒等式を延長する。これにより、正の核の領域でBergman Hessianの正定値性まで回復する。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.04590](https://arxiv.org/abs/2610.04590)
- **Introduction:** Section 1、pp. 1–3。
- **主要定理:** Theorems 1.1、1.2、1.3、1.5。先行研究との関係はRemarks 1.4、1.6。
- **論文構成:** p. 3。境界漸近、extremalの場合、調和方程式への還元、一意接続、非有界領域の順に扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
