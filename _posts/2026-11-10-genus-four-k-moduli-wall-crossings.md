---
layout: paper
title: Birational Geometry of K-Moduli Spaces of Genus Four Curves
title_ja: 種数4曲線のKモジュライと6つの壁
authors: Kenneth Ascher, Kristin DeVleming, Hongyu Luo, Yuchen Liu, Junyan Zhao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the wall-crossings for K-moduli spaces of (3,3)-curves on $\mathbb{P}^1\times\mathbb{P}^1$. Together with the boundary polarized Calabi--Yau moduli space, these spaces interpolate between the GIT moduli space of (3,3)-curves and the Baily--Borel compactification of the moduli space of K3 surfaces arising as cyclic triple covers of $\mathbb{P}^1\times\mathbb{P}^1$ branched along such curves. As applications, we describe the corresponding birational models in the Hassett--Keel--Looijenga program and realize the K-moduli space of degree one del Pezzo surfaces through explicit wall-crossings.
topic: algebraic-geometry
tags:
- k-stability
- moduli
- fano-varieties
- birational-geometry
- hyperkahler-geometry
arxiv_id: 2611.10415v1
arxiv_url: https://arxiv.org/abs/2611.10415
arxiv_submitted: '2026-11-07'
arxiv_updated: '2026-11-07'
summary: 二次曲面上の(3,3)曲線に係数を付けたlog Fano対のKモジュライを調べ、係数変化に伴う6つの壁を決定する。GIT商からK3周期領域のBaily–Borelコンパクト化までを結び、次数1 del Pezzo曲面のKモジュライにも応用する。
abstract_en: ''
summary_en: The authors compare compactifications of genus-four curves through varying coefficients in log Fano pairs. They identify the precise stability thresholds and the surfaces supporting the replacement curves. Period geometry supplies a description of the resulting models and of the Calabi–Yau endpoint. A related sequence of modifications recovers the moduli of degree-one del Pezzo surfaces.
abstract_ja: P¹×P¹上の(3,3)曲線のKモジュライに現れる壁越えをすべて記述する。境界偏極Calabi–Yau対のモジュライを極限として用い、GITモジュライと、分岐3重被覆から得られるK3曲面のBaily–Borelコンパクト化をつなぐ。Hassett–Keel–Looijenga計画の双有理モデルとの対応と、次数1 del Pezzo曲面のKモジュライの明示的構成を与える。
abstract_source_url: https://arxiv.org/abs/2611.10415
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.10415v1](https://arxiv.org/abs/2611.10415)
- **著者:** Kenneth Ascher, Kristin DeVleming, Hongyu Luo, Yuchen Liu, Junyan Zhao
- **初回投稿日:** 2026-11-07
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般の種数4標準曲線は、滑らかな二次曲面上の$(3,3)$曲線として表せる。この曲線をコンパクト化する方法は一つではなく、GIT、K安定性、K3曲面の周期など、どの幾何を保つかで境界に加える対象が変わる。

本論文は対$(\mathbb P^1\times\mathbb P^1,cC)$の係数$c$を動かし、そのKモジュライの全壁越えを決定する。6つの壁と7つの中心が現れ、単に同じ曲面上の曲線を入れ替えるだけでなく、重み付き射影平面やその部分平滑化上の曲線へ移る。

小さい係数ではGIT商と一致し、$c=2/3$のCalabi–Yau極限はK3曲面のBaily–Borelコンパクト化につながる。この比較により、異なるコンパクト化の間の双有理写像を具体的な安定性の変化として理解できる。

## 背景と問題設定

$0<c<2/3$を有理数とし、$\mathcal M\_4^K(c)$を$(\mathbb P^1\times\mathbb P^1,cC)$へ$\mathbb Q$-Gorenstein平滑化できるK半安定log Fano対のスタック、$\overline M\_4^K(c)$をそのgood moduli spaceと書く。ここで$C$は$(3,3)$曲線である。係数上限はlog FanoからCalabi–Yauへ移る境界である。

周期側の$\mathcal F$は曲線に分岐する巡回3重被覆から得るK3曲面のモジュライである。既存のVGITモデルやHassett–KeelモデルとKモジュライは常に一致するわけではない。

## 主結果

### 主定理1：全壁の決定（Theorem 1.1）

スタック$\mathcal M\_4^K(c)$は滑らかで、$\overline M\_4^K(c)$は正規である。$0<c<1/6$では$(3,3)$曲線のGITモジュライ$M^{\mathrm{GIT}}$と同型になり、壁は正確に

$$
(c\_1,c\_2,c\_3,c\_4,c\_5,c\_6)
=\left(\frac16,\frac13,\frac{16}{33},\frac12,\frac{11}{21},\frac{17}{30}\right)
$$

である。$c\_1,c\_3$は因子的収縮、残りはflipであり、$c=1/2$に2つの中心があるため中心は計7つとなる。

現れる底曲面は$\mathbb P^1\times\mathbb P^1$、$\mathbb P(1,1,2)$、$\mathbb P(1,2,9)$、および最後の曲面の部分平滑化$X\_{10}$に限られる。特に$c=16/33$で$X\_{10}$上の曲線が入り、$(2,3)$完全交叉のVGITだけでは捉えられない変化が生じる。

### 主定理2：周期側の双有理モデル（Theorem 1.2）

$H\_n,H\_h,H\_v$を順にnodal、hyperelliptic、Gieseker–Petri因子、$\lambda\_{\mathrm{Hodge}}$をHodge線束とすると、Baily–Borelコンパクト化上で

$$
102\lambda\_{\mathrm{Hodge}}=2H\_n+9H\_v+28H\_h
$$

となり、

$$
\overline M\_4^K(c)\simeq\operatorname{Proj}R\left(\mathcal F,
\left(1-\frac32c\right)\left(4H\_v+\frac{32}{3}H\_h\right)
+36c\lambda\_{\mathrm{Hodge}}\right)
$$

が成り立つ。CM線束は、この表示の因子を双有理周期写像で対応させたものに比例する。$c\to2/3$で得る境界偏極Calabi–Yauモジュライは$\mathcal F^{\mathrm{BB}}$と同型で、最後のKモジュライ上のHodge線束のample modelとなる。

### 主定理3：次数1 del Pezzo曲面（Theorem 1.3）

$\mathbb P(1,1,2)$の特異点を通らない次数6曲線のGITモジュライ$N^{\mathrm{GIT}}$から、blowupとsmall contractionを経て、次数1 del Pezzo曲面のKモジュライを得る。Introductionの図式は

$$
N^{\mathrm{GIT}}\longleftarrow\widehat N
\longrightarrow N^K(1/2)\simeq M\_{\mathrm{dP1}}^K
$$

であり、最後の同型は曲線に分岐する2重被覆による。small contractionは分離型$A\_7$特異点の曲線を表す有理曲線を収縮し、$A\_8$型の点の近傍では局所同型となる。

## 証明の見取り図

まずモジュライに現れ得る曲面を特定し、小係数でGITとの比較と最初の壁を扱う。その後、$\mathbb P(1,1,2)$、$X\_{10}$、$\mathbb P(1,2,9)$に対応する壁を順に決定する。最後に境界偏極Calabi–Yau対と周期写像を用いてK3モジュライやdel Pezzo曲面の結果へ移す。Introductionはこの構成を述べるが、各特異対のK安定性判定の証明全体は本記事では追わない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.10415)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.10415v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.10415v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
