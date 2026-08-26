---
layout: paper
title: "Ricci-flat metrics on Calabi-Yau manifolds"
title_ja: "Calabi--Yau多様体上のRicci平坦計量"
authors: "Valentino Tosatti"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  We study the space of Ricci-flat Kahler metrics on a given Calabi-Yau manifold, pose a number of questions about their possible degenerations, and survey some recent results on these questions.
topic: differential-geometry
tags:
  - calabi-yau-geometry
  - curvature
  - metric-limits
  - monge-ampere-equations
arxiv_id: "2509.25607v2"
arxiv_url: "https://arxiv.org/abs/2509.25607"
arxiv_submitted: "2025-09-30"
arxiv_updated: "2025-10-14"
summary: >-
  固定したCalabi--Yau多様体上でKähler類が錐の境界へ近づくとき、対応するRicci平坦Kähler計量がどのように退化するかを整理する概説である。非崩壊の場合の滑らかな局所収束と、崩壊の場合には極限が接近経路に依存し得る現象を対比し、未解決問題を提示する。
abstract_en: ""
summary_en: >-
  This survey studies how Ricci-flat Kähler metrics vary on a fixed Calabi--Yau manifold as their cohomology classes approach the boundary of the Kähler cone. It formulates continuity and regularity questions for limiting positive currents. Known results give a canonical smooth limit away from a null locus for nef and big boundary classes, whereas collapsing classes can exhibit path-dependent weak limits. The article also reviews geometric convergence questions and open problems surrounding these two regimes.
abstract_ja: >-
  固定したCalabi--Yau多様体上のRicci平坦Kähler計量の空間を扱い、Kähler錐の境界へ向かう際に起こり得る退化を調べる。極限電流の存在・一意性・正則性や、弱収束をより強い収束へ改善できる条件を問題として定式化し、それらに関する近年の結果を概観する。
abstract_source_url: "https://arxiv.org/abs/2509.25607"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.25607](https://arxiv.org/abs/2509.25607)
- **著者:** Valentino Tosatti
- **初回投稿日:** 2025年9月30日
- **最終更新日:** 2025年10月14日（v2）
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi--Yau多様体$X$では、各Kähler類に一意なRicci平坦Kähler計量が対応する。本稿はこの対応をKähler錐の境界まで延長できるか、また境界へ近づく計量列がどの意味で収束するかを中心に据えた概説である。

境界類がnefかつbigである非崩壊の場合、極限は一意な正閉$(1,1)$-電流として定まり、null locusの外では滑らかなRicci平坦計量となる。近似するRicci平坦計量もその開集合上で局所$C^\infty$収束する。

一方、bigでない崩壊の場合には、同じ境界類へ近づいても経路によって異なる弱極限を持つK3曲面の例がある。したがってRicci平坦計量を境界全体へ連続的に延長する素朴な期待は一般には成立しない。

本稿の性格は新しい単一の主定理を証明する研究論文ではなく、Calabi--Yau定理から出発して既知の収束定理、反例、正則性・距離極限に関する問題を体系化するsurveyである。

## 背景と問題設定

Kähler類$[\alpha]$に対しCalabi--Yau定理は複素Monge--Ampère方程式

$$
(\alpha+i\partial\bar\partial\varphi)^n=e^F\alpha^n
$$

を解き、所定のRicci形式を持つ一意なKähler計量を与える。$c_1(X)=0$なら各Kähler類に一意なRicci平坦計量があり、写像$\mathrm{CY}:\mathcal C\to\mathcal H$が得られる。

問題は$[\alpha_i]\to[\alpha]\in\partial\mathcal C$のとき$\mathrm{CY}([\alpha_i])$が正閉電流へ一意に収束するか、そのポテンシャルが有界・連続か、特異集合の外で滑らかに収束するかである。体積$\int_X\alpha^n$が正なら非崩壊、ゼロなら崩壊という二つの領域で挙動が分かれる。

## 主結果

### Calabi--Yau定理（Theorem 1.1として再録）

コンパクトKähler多様体$(X,\alpha)$では、固定したKähler類内の計量から$c_1(X)$を表す実閉$(1,1)$-形式へのRicci写像が全単射である。特に$c_1(X)=0$なら各Kähler類は一意なRicci平坦代表を持つ。

### nefかつbigな境界類の極限（Theorem 2.3として概説）

nefかつbigな類からなる錐$\mathcal B$上では$\mathrm{CY}$が正閉電流の空間へ連続かつ単射に延長される。$[\alpha_i]\to[\alpha]\in\mathcal B$なら、極限は$X\setminus\operatorname{Null}([\alpha])$上で滑らかなRicci平坦Kähler計量であり、

$$
\mathrm{CY}([\alpha_i])\longrightarrow\mathrm{CY}([\alpha])
\quad\text{in }C^\infty_{\mathrm{loc}}(X\setminus\operatorname{Null}([\alpha])).
$$

### 崩壊域での非一意性（Theorem 3.1として概説）

ある射影K3曲面では、同じnefだがbigでない境界類へ収束する二つのKähler類列が、互いに異なる正閉電流へ弱収束する。これはKähler錐の閉包全体への連続延長が存在しないことを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2509.25607](https://arxiv.org/abs/2509.25607)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1; 後続の概説結果としてTheorem 2.3, Theorem 3.1
- **論文構成の説明:** ContentsおよびSections 1–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
