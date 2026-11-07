---
layout: paper
title: On K-stability of Calabi-Yau fibrations
title_ja: Calabi–Yauファイブレーションの断熱的K安定性を底曲線で判定する
authors: Masafumi Hattori
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We show that Calabi-Yau fibrations over curves are uniformly K-stable in an adiabatic sense if and only if the base curves are K-stable in the log-twisted sense. Moreover, we prove that there are cscK metrics for such fibrations when the total spaces are smooth.
topic: algebraic-geometry
tags:
- k-stability
- calabi-yau-geometry
- csck-extremal-kahler-metrics
- singularities
arxiv_id: 2203.11460v2
arxiv_url: https://arxiv.org/abs/2203.11460v2
arxiv_submitted: '2022-03-22'
arxiv_updated: '2023-08-09'
summary: 曲線上のklt-trivialファイブレーションの一様断熱的K安定性を、判別因子とmoduli因子を備えた底曲線のlog-twisted K安定性と同値にする。全空間が滑らかな場合のcscK計量の存在や、有理楕円曲面の特異ファイバー型による判定を導く。
abstract_en: ''
summary_en: This paper studies polarizations that concentrate increasingly on the base of a fibration. For klt-trivial fibrations over curves, it detects uniform adiabatic K-stability entirely through the discriminant and moduli data on the base. Limits of alpha and delta invariants provide the bridge from the curve to the total space. In the smooth boundary-free case, the same framework yields constant-scalar-curvature Kähler metrics, including situations with singular fibers.
abstract_ja: 曲線上のCalabi–Yau型ファイブレーションについて、全空間の一様断熱的K安定性と底曲線のlog-twisted K安定性が同値になることを示す。底には判別因子とmoduli因子を含める必要がある。全空間が滑らかで境界がない場合には、底からの引戻しが支配的となる偏極にcscK計量が存在する。α不変量とδ不変量の断熱極限、およびJ安定性の数値的判定を用いる。
abstract_source_url: https://arxiv.org/abs/2203.11460v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2203.11460v2](https://arxiv.org/abs/2203.11460v2)
- **著者:** Masafumi Hattori
- **初回投稿日:** 2022-03-22
- **最終更新日:** 2023-08-09
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ファイブレーションの全空間のK安定性を、底とファイバーの幾何から判定できれば、cscK計量の存在やモジュライの構成に具体的な手掛かりが得られる。本論文は、底から引き戻した偏極を支配的にする断熱的な状況を、Calabi–Yau型ファイブレーションで調べる。

底が曲線の場合、全空間の一様断熱的K安定性は、底に判別因子とmoduli因子を加えたlog-twisted K安定性と同値になる。単に底のtwisted安定性を見るだけでは捉えられない、特異ファイバーの寄与を判別因子が記録する。

全空間が滑らかで境界がない場合には、同じ条件からcscK計量の存在も得られる。特異ファイバーを許し、個々のファイバーがK不安定な例も含むため、全ファイバーにcscK計量を仮定する従来の枠組みとは異なる。

さらに有理楕円曲面へ適用し、指数とKodairaの特異ファイバー型から安定性や不安定性を判定する。主定理を支えるのは、安定性の底への降下、全空間での数値的十分条件、そして不変量の断熱極限という三つの結果である。

## 背景と問題設定

偏極付きファイブレーション $f:(X,\Delta,H)\to(C,L)$ で

$$
L\_\varepsilon=\varepsilon H+f^\ast L,\qquad \varepsilon>0
$$

を考える。十分小さい全ての $\varepsilon$ に対して $(X,\Delta,L\_\varepsilon)$ がK安定であることが断熱的K安定性であり、本論文はその一様版を導入する。

klt-trivialという条件は、対がkltで、対数標準因子が底に相対的に有理自明であることに対応する。標準束公式の底側には判別因子 $B$ とmoduli因子 $M$ が現れる。特異ファイバーをもつ場合に、この二つを区別して安定性へ取り込むことが重要になる。

## 主結果

### 底曲線による同値な判定（Theorem 1.1）

$C$ が滑らかな曲線で、$f$ が偏極付きklt-trivialファイブレーションなら

$$
(X,\Delta,H)\text{が }(C,L)\text{上で一様断熱的K安定}
\ \Longleftrightarrow\ (C,B,M,L)\text{がlog-twisted K安定}
$$

となる。さらに $\Delta=0$、$X$ が滑らかなら、右辺の条件の下で十分小さい有理数 $\varepsilon>0$ に対して $L\_\varepsilon$ にcscK計量が存在する。任意の大きさの $\varepsilon$ に対する存在定理ではない。

### 高次元の底への必要条件（Theorem 1.2）

この定理では底 $C$ を曲線に限らない。偏極付きlc-trivialファイブレーションでmoduli因子 $M\_C$ が $\mathbb Q$ Cartierなら、全空間の断熱的K半安定性は $(C,B\_C,M\_C,L)$ のlog-twisted K半安定性を導く。

さらに底がlog-twisted Fano対かつAmbro modelである場合、全空間の一様断熱的K安定性から底のK安定性を得る。滑らかな曲線はAmbro modelであるため、Theorem 1.1の一方向を支える。

### 一様K安定性の数値的十分条件（Theorem 1.3）

偏極付き $n$ 次元klt対 $(X,\Delta,L)$ に対し

$$
H=\delta\_{(X,\Delta)}(L)L+K\_X+\Delta
$$

と置く。$H$ が豊富で、ある $\eta>0$ が存在し、任意の $p$ 次元部分多様体 $V$、$1\leq p\leq n-1$ に対して

$$
\left(n\frac{H\cdot L^{n-1}}{L^n}L-pH\right)\cdot L^{p-1}\cdot V
\geq\eta(n-p)L^p\cdot V
$$

なら、$(X,\Delta,L)$ は一様K安定となる。ここでは断熱パラメータとの混同を避け、原文の正定数を $\eta$ と書いた。J安定性の数値的判定とδ不変量によるエントロピー評価を組み合わせる条件である。

### α・δ不変量の断熱極限（Theorem 1.4）

$(X,\Delta)$ がklt、$C$ が滑らかな曲線である偏極付き代数的ファイバー空間について、

$$
B=\sum\_{p\in C}\left(1-\operatorname{lct}\_{(X,\Delta)}(f^{-1}(p))\right)p
$$

とする。このとき

$$
\lim\_{\varepsilon\to0}\alpha\_{(X,\Delta)}(\varepsilon H+f^\ast L)=\alpha\_{(C,B)}(L)
$$

および

$$
\lim\_{\varepsilon\to0}\delta\_{(X,\Delta)}(\varepsilon H+f^\ast L)=\delta\_{(C,B)}(L)
$$

が成り立つ。この極限定理自体は、klt-trivialという追加条件なしのファイブレーションを扱う。

### 有理楕円曲面への適用（Corollary 1.5）

滑らかな有理楕円曲面 $X$ の指数を $m$ とする。任意の豊富な $H$ について、次の条件では一様断熱的K安定性と、対応する断熱偏極のcscK計量の存在が得られる。

- $m=1$ でファイバーが全て被約。
- $m=2$ で型 $\mathrm{II}^\ast $、$\mathrm{III}^\ast $ のファイバーがない。
- $m=3$ で型 $\mathrm{II}^\ast $ のファイバーがない。
- $m\geq4$。

一方、$m=1$ で型 $\mathrm{II}^\ast $、$\mathrm{III}^\ast $、$\mathrm{IV}^\ast $ のいずれかがあれば断熱的K不安定となる。$m=2$ で型 $\mathrm{II}^\ast $ がある場合も同様である。IntroductionのMiranda予想に関する議論と、ここで証明する断熱的K安定性の判定は区別する必要がある。

## 証明の見取り図

底のテスト配置を全空間へ引き戻し、Donaldson–Futaki不変量を比較する。そのままではtwisted版の条件しか得られないため、極小モデル・プログラムと標準束公式を用いて判別因子の寄与を含むlog-twisted版へ精密化する。

逆向きには、偏極に相当する因子を水平部分と垂直部分に分け、その重複度を評価してα不変量の極限を求め、さらにδ不変量の極限へ移る。底がFano型の場合にはδの下界を全空間へ運び、J安定性から得た数値条件を適用する。

滑らかな場合には同様の評価からK-energyの強圧性を示し、既知の解析的存在定理によりcscK計量を得る。各特異ファイバーに個別の計量を構成する方法ではなく、底の安定性と全空間の変分評価を結ぶ方法である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2203.11460v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2203.11460v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4; Corollary 1.5; Definition 1.1とConjecture 1.2は別項目
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2203.11460v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
