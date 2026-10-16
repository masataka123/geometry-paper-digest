---
layout: paper
title: Understanding entropy using Aubin--Yau deformations
title_ja: Aubin–Yau変形による三種のエントロピーの統一
authors: Tamás Darvas, Kewei Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.CV
arxiv_abstract: 'In this paper we investigate three types of entropy that frequently appear in the research of K\"ahler geometry: the classical K\"ahler entropy, the radial entropy and the non-Archimedean entropy. We give a unifying interpretation for these entropies by showing that they can all be expressed as the derivative of the Monge--Amp\`ere energy along certain Aubin--Yau type deformations. Such considerations also lead to a novel algebraic criterion for the existence of constant scalar curvature K\"ahler metrics.'
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- pluripotential-theory
- monge-ampere-equations
arxiv_id: 2610.21198v1
arxiv_url: https://arxiv.org/abs/2610.21198
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: Kähler幾何に現れる通常・測地線方向・非Archimedeanのエントロピーを、変形に沿うエネルギーの微分として統一する。偏極多様体のcscK計量の存在について、補助的なKβエネルギーの下方有界性や半安定性による新たな判定を与える。
abstract_en: ''
summary_en: The paper examines how entropy responds to a regularization parameter in three settings of Kähler geometry. A common variational construction links the relevant entropy to the velocity of Monge–Ampère energy. Compatibility with geodesic slopes connects the analytic and non-Archimedean descriptions. The authors also extend a criterion for canonical metrics using a parameter-dependent stability notion.
abstract_ja: 著者らは、Kählerポテンシャル、有限エネルギー測地線半直線、非Archimedeanポテンシャルに対し、Aubin–Yau型変形のエネルギー微分がそれぞれのエントロピーになることを示す。非Archimedean側ではlog discrepancyを用いた包絡が変形を与え、正則化と傾きの整合性を得る。応用として、Kβエネルギーの下方有界性およびKβ半安定性をcscK計量の存在条件に加える。
abstract_source_url: https://arxiv.org/abs/2610.21198
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21198v1](https://arxiv.org/abs/2610.21198)
- **著者:** Tamás Darvas, Kewei Zhang
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.DG（主分類）; math.AG, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

cscK計量の変分問題では、Mabuchi汎関数のエントロピー項を近似の下で制御することが難所となる。本論文は、エントロピーそのものを直接扱う代わりに、Aubin–Yau方程式でポテンシャルを変形し、Monge–Ampèreエネルギーが変化する速度として読み取る。

この考え方は、コンパクトKähler多様体上のポテンシャルだけでなく、測地線半直線に沿った漸近的エントロピーにも適用される。さらに偏極多様体の非Archimedean幾何では、log discrepancyを加えて包絡を取る操作が同じ役割を果たす。三つの構成は、エネルギーとエントロピーの傾きを通じて整合する。

応用はcscK計量の存在判定である。既存のKβエネルギーのpropernessによる特徴づけに対し、本論文は、ある正のβでの下方有界性、あるいはKβ半安定性まで条件を弱めても同値になると主張する。ここでいうKβ半安定性は通常のK半安定性と区別すべき補助的な概念である。

## 背景と問題設定

$(X,\omega)$をコンパクトKähler多様体、$V=\int\_X\omega^n$とし、$\omega\_u=\omega+dd^cu$、$dd^c=i\partial\bar\partial/(2\pi)$とおく。有限エネルギーポテンシャルの空間を$\mathcal E^1$と記す。主要な量は

$$
\operatorname{Ent}(u)=\frac1V\int\_X\log\frac{\omega\_u^n}{\omega^n}\thinspace \omega\_u^n,
\qquad
I(u)=\frac1{(n+1)V}\sum\_{j=0}^n\int\_Xu\thinspace \omega\_u^j\wedge\omega^{n-j}
$$

である。Monge–Ampère測度が背景測度に絶対連続でなければ、エントロピーは無限大とする。$u\in\mathcal E^1$を固定し、$\varepsilon>0$について

$$
\omega\_{u\_\varepsilon}^{n}=e^{(u\_\varepsilon-u)/\varepsilon}\omega^n
$$

を満たす連続な有限エネルギー解を考える。従来のパラメータでは$\beta=1/\varepsilon$である。

## 主結果

### 主定理1（Theorem 1.1）

変形に沿うエネルギーの微分はエントロピーに一致する。

$$
\frac{d}{d\varepsilon}I(u\_\varepsilon)=\operatorname{Ent}(u\_\varepsilon)\quad(\varepsilon>0),
\qquad
\left.\frac{d}{d\varepsilon}\right|\_{0+}I(u\_\varepsilon)=\operatorname{Ent}(u).
$$

$\varepsilon=0$では$I(u)$で延長する。エネルギーは凹かつ非減少であり、初期の右微分によって元のエントロピーを回収できる。これは有限エネルギーの非滑らかな対象をAubin–Yau解で近似する原理である。

### 主定理2（Theorem 1.2）

有限エネルギー測地線半直線$\lbrace u\_t\rbrace $のエントロピー傾きが有限なら、放射方向のAubin–Yau変形$P\_\varepsilon(u)\_t$にも同じ微分公式が成立する。$I\lbrace u\_t\rbrace =\lim\_{t\to\infty}I(u\_t)/t$、$\operatorname{Ent}\lbrace u\_t\rbrace =\lim\_{t\to\infty}\operatorname{Ent}(u\_t)/t$とすると、

$$
\frac{d}{d\varepsilon}I\lbrace P\_\varepsilon(u)\_t\rbrace
=\operatorname{Ent}\lbrace P\_\varepsilon(u)\_t\rbrace ,
\qquad
\left.\frac{d}{d\varepsilon}\right|\_{0+}I\lbrace P\_\varepsilon(u)\_t\rbrace
=\operatorname{Ent}\lbrace u\_t\rbrace .
$$

この変形は、正規化した放射方向Ding型汎関数を最大にする包絡として定義される。

### 主定理3（Theorem 1.3）

各時刻でAubin–Yau方程式を解いてから傾きを取る操作は、放射方向の変形とエネルギーのレベルで一致する。$u\_{t,\varepsilon}$を時刻$t$の解とすると、固定した$\varepsilon>0$について

$$
\lim\_{t\to\infty}\frac{I(u\_{t,\varepsilon})}{t}=I\lbrace P\_\varepsilon(u)\_t\rbrace ,
\qquad
\lim\_{t\to\infty}\frac{\operatorname{Ent}(u\_{t,\varepsilon})}{t}
=\operatorname{Ent}\lbrace P\_\varepsilon(u)\_t\rbrace .
$$

エネルギーとその微分の収束は正のパラメータ区間上で局所一様である。変形された二つの半直線自体が同一であるという主張ではない。

### 主定理4（Theorem 1.4）

偏極複素多様体$(X,L)$の有限エネルギー非Archimedeanポテンシャル$U$に対しても、エントロピーは変形の微分となる。log discrepancy関数を$A\_X$、$L$-psh包絡を$P$として

$$
U\_\varepsilon=P(U+\varepsilon A\_X),
\qquad
\operatorname{Ent}^{\mathrm{NA}}(U)=\int\_{X^{\mathrm{an}}}A\_X\thinspace \operatorname{MA}^{\mathrm{NA}}(U)
$$

とおくと、$U\_\varepsilon$は$\varepsilon>0$で連続であり、$\varepsilon\downarrow0$に対し$U$へ減少する。そして

$$
\frac{d}{d\varepsilon}I^{\mathrm{NA}}(U\_\varepsilon)
=\operatorname{Ent}^{\mathrm{NA}}(U\_\varepsilon),
\qquad
\left.\frac{d}{d\varepsilon}\right|\_{0+}I^{\mathrm{NA}}(U\_\varepsilon)
=\operatorname{Ent}^{\mathrm{NA}}(U).
$$

背景となる標準的な非Archimedean測度がないため、方程式を形式的に移すのではなく、Ding型の変分問題と包絡を使う点が要となる。

### 主定理5（Theorem 1.5）

非Archimedeanエントロピーは、test configuration由来のポテンシャル$U^k$と正の有理数$\varepsilon\_k$を組み合わせて近似できる。

$$
U^k\searrow U,\qquad \varepsilon\_k\searrow0,\qquad
U^k\_{\varepsilon\_k}\searrow U,\qquad
\operatorname{Ent}^{\mathrm{NA}}(U)=\lim\_{k\to\infty}\operatorname{Ent}^{\mathrm{NA}}(U^k\_{\varepsilon\_k}).
$$

Introductionは、この正則化をlog discrepancy modelと結び付け、著者らの以前の結果に別の概念的説明を与えるものと位置づける。

### 主定理6（Theorem 1.6）

Introductionが非自明な正則ベクトル場を持たない偏極多様体について述べるcscK対応では、次の条件が同値となる。

1. $c\_1(L)$に一意なcscK計量が存在する。
2. ある$\beta>0$について$K^\beta$エネルギーがproperである。
3. ある$\beta>0$について$(X,L)$が一様$K^\beta$安定である。
4. ある$\beta>0$について$K^\beta$エネルギーが下に有界である。
5. ある$\beta>0$について$(X,L)$が$K^\beta$半安定である。

新しい部分は4、5との同値性である。$K^\beta$の定義は後続のSection 7に委ねられているため、ここでは通常のK安定性と同一視しない。Introduction末尾は、同時期に現れた関連研究と連続自己同型群を扱う拡張にも言及している。

## 証明の見取り図

通常のポテンシャルでは、滑らかな場合の方程式解析から微分公式を得て、近似によって$\mathcal E^1$へ進む。放射方向では、ポテンシャルとパラメータに関する定量的連続性、凹関数の微分の収束を組み合わせる。test configurationに由来する半直線で交点理論的な傾き公式を使い、Demailly近似と下半連続性によって一般の場合へ拡張する。

非Archimedean側では、既存の有限エネルギー理論と包絡の連続性が基盤となる。この変形による正則化を従来の$K^\beta$理論と組み合わせることで、cscK存在判定への応用を導く。

## 原論文との対応

- **Abstractページ:** [Understanding entropy using Aubin--Yau deformations](https://arxiv.org/abs/2610.21198)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21198v1) — Section 1, pp. 1–8（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21198v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
