---
layout: paper
title: "Generalized algebraic Morse inequalities and Hasse-Schmidt jet differentials"
title_ja: "一般化代数的Morse不等式とHasse–Schmidtジェット微分"
authors: "Benoit Cadorel"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  This is a remastered and expanded version of a an earlier preprint of the author, in which we give a fully algebraic proof of an important theorem of Demailly, stating the existence of many Green-Griffiths jet differentials on a complex projective manifold of general type. To this end, we introduce a new algebraic version of the Morse inequalities, which we use in our proof as an algebraic counterpart to Demailly's and Bonavero's holomorphic Morse inequalities. This new version also applies to positive characteristic, giving the existence of Hasse-Schmidt jet differentials for a smooth projective variety of general type over an arbitrary algebraically closed field.
topic: algebraic-geometry
tags:
  - hyperbolicity
  - positive-characteristic
arxiv_id: "2604.19207v1"
arxiv_url: "https://arxiv.org/abs/2604.19207"
arxiv_submitted: "2026-04-21"
arxiv_updated: "2026-04-21"
summary: >-
  一般型射影多様体に豊富なGreen–Griffithsジェット微分が存在するというDemaillyの定理へ、完全に代数的な証明を与える。層別化に付随する切断Chern交点数を用いた一般化Morse不等式を構築するため、同じ方法が任意標数でHasse–Schmidtジェット微分の存在を導く。
abstract_en: ""
summary_en: >-
  This work replaces the analytic Morse-inequality input in Demailly's jet-differential theorem with a stratified algebraic construction. The resulting inequalities control asymptotic cohomology through truncated intersection numbers and recover the abundance of Green–Griffiths equations on complex varieties of general type. Because the argument is algebraic, it also produces Hasse–Schmidt jet differentials over algebraically closed fields of arbitrary characteristic.
abstract_ja: >-
  一般型複素射影多様体上に多数のGreen–Griffithsジェット微分が存在するというDemaillyの定理を、完全に代数的に証明する。そのために新しい代数的Morse不等式を導入し、正則Morse不等式の代数的対応物として用いる。この方法は正標数にも適用でき、任意の代数閉体上の滑らかな一般型射影多様体にHasse–Schmidtジェット微分が存在することを与える。
abstract_source_url: "https://arxiv.org/abs/2604.19207"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.19207](https://arxiv.org/abs/2604.19207)
- **著者:** Benoit Cadorel
- **初回投稿日・最終更新日:** 2026年4月21日（v1）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Green–Griffiths–Lang予想へのジェット微分法では、一般型多様体上に負にtwistした大域ジェット微分方程式を十分多く構成することが出発点となる。Demaillyは正則Morse不等式を用いてこれを証明したが、その証明は解析的であった。

本論文は、線束を単にnef因子の差と書く代わりに、線束の自明化を備えた層別化を用いる一般化代数的Morse不等式を構築する。各stratum上の零・極の重複度からtruncated Chern intersection numberを定義し、コホモロジーの漸近評価を与える。

この不等式をweighted projectivized bundleとsplitting principleへ適用し、Green–Griffithsジェット束の豊富性を代数的に回収する。さらに微分をHasse–Schmidt微分へ置き換えることで、同じ存在結果を任意標数へ移す。

## 背景と問題設定

一般型 $n$ 次元複素射影多様体 $X$ に対し、Demaillyの定理は十分大きい $k$ について

$$
h^0(X,E^{GG}_{k,m}\Omega_X)\ge C m^{n+nk-1}
$$

を主張する。特に ample line bundle $A$ と $m\gg k\gg1$ に対して $H^0(X,E^{GG}_{k,m}\Omega_X\otimes\mathcal O(-A))\ne0$ となる。課題は、解析的曲率積分を使わずこの最大次数の増大を得ることである。

## 主結果

### 層別化による一般化Morse不等式（Theorem 3 / Theorem 3.3.5）

任意の体上の射影 $n$ 次元多様体 $X$、$\mathbb Q$-line bundle $L$、$L$ に適合する自明化付き層別化 $\Sigma$ に対し、強・弱Morse不等式と漸近Riemann–Roch公式を示す。例えば強不等式は

$$
\sum_{0\le j\le i}(-1)^{j+i}h^j(X,M\otimes L^{\otimes m})
\le (-1)^i\deg c_1(L,\Sigma)^n_{[\le i]}\frac{m^n}{n!}+O(m^{n-1})
$$

である。nef性ではなく層別化上の零・極データを入力にできる点が従来の代数的Morse不等式との違いである。

### 一般型多様体上のジェット微分（Theorem 5）

Introductionでは概略として、generically finiteな $p:X'\to X$、分解 $p^*K_X=A+E$、$A$ に適合する層別化を構成し、

$$
\deg c_1(A,\Sigma)^n_{[\le1]}>(\deg p)(\operatorname{vol}(K_X)-\varepsilon)>0
$$

を得ると述べられている。これをジェット束のgraded objectへ適用して $E^{GG}_{k,\bullet}\Omega_X$ のbignessを導く。任意標数では対応する $E^{HS}_{k,\bullet}\Omega_X$ がbigとなる。

## 証明の見取り図

一般化Morse不等式は次元に関する帰納法とcoherent sheafの完全列から得る。ジェット空間はcotangent bundleのweighted projectivizationへ退化させ、splitting principleで線束の直和の場合へ還元する。各直和因子へMorse不等式を適用した総和はsimplex上の積分へ近づき、$k\to\infty$ の平均化により標準束のvolumeが主項として現れる。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.19207](https://arxiv.org/abs/2604.19207)
- **Introduction:** pp. vii–xiii
- **主要結果:** Theorems 2–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
