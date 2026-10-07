---
layout: paper
title: 'Complex Monge-Amp{\`e}re equations on Hermitian Manifolds: From bounded to smooth solutions'
title_ja: Hermitian多様体上の有界Monge–Ampère解の滑らかさ
authors: Papa Badiane, Chinh H. Lu, Ahmed Zeriahi
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: |-
  We study regularity of bounded weak solutions to complex Monge-Amp{\`e}re equations on compact Hermitian manifolds with right-hand side possibly decreasing in the unknown. Our proof relies on the domination principle and a priori estimates, partially motivated by the Monge-Amp{\`e}re eigenvalue problem. Our main result roughly says that any bounded solution is smooth in the regular locus of the data. When the right-hand side is strictly positive and smooth, we recover known results by Nie, Ko lodziej-Nguyen for the Hermitian case and Sz{\'e}kelyhidi-Tosatti for the K{\"a}hler case, which rely on the regularizing property of the K{\"a}hler-Ricci flow.
topic: several-complex-variables
tags:
- monge-ampere-equations
- pluripotential-theory
- singularities
- kahler-einstein-metrics
arxiv_id: 2610.06473v1
arxiv_url: https://arxiv.org/abs/2610.06473v1
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  コンパクトHermitian多様体上の複素Monge–Ampère方程式について、有界な弱解から滑らかさを得る問題を扱う。右辺が未知関数に関して減少し得る場合も、データが滑らかで背景形式の退化を避けた領域では解が滑らかになると示す。支配原理と一様評価に基づく方法であり、klt空間の正則部分や上下解による存在問題にも適用する。
abstract_en: ''
summary_en: |-
  Weak constructions of complex Monge–Ampère solutions do not automatically give smooth potentials. This paper supplies a regularity argument that still works when the dependence of the density on the unknown is not monotone. Auxiliary elliptic equations and the domination principle identify a smooth limit with the given bounded solution on the appropriate regular region. The introduction also discusses singular ambient spaces and the extra ordering needed to obtain existence from subsolutions and supersolutions.
abstract_ja: |-
  弱い方法で構成したMonge–Ampère方程式の有界解が、データと同じ正則性をもつかを調べる。コンパクトHermitian多様体上で半正値かつbigな背景形式を許し、右辺の未知関数に関する単調増加性を仮定せず、適切な正則領域での滑らかさを証明する。証明は平滑化する流ではなく、補助方程式の事前評価と支配原理を用いる。klt特異点をもつ空間への帰結と、順序付けられた有界な上下解からの解の存在も述べる。
abstract_source_url: https://arxiv.org/abs/2610.06473v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.06473v1](https://arxiv.org/abs/2610.06473v1)
- **著者:** Papa Badiane, Chinh H. Lu, Ahmed Zeriahi
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.CV（主分類）、math.DG（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

変分法やPerron法などで得られる複素Monge–Ampère方程式の解は、初めから滑らかとは限らない。本論文は、既に存在する有界な弱解を出発点とし、その正則性をデータから回復する問題を扱う。存在・一意性とは区別した正則性の定理である。

対象はコンパクトHermitian多様体で、背景形式は半正値かつbigとする。右辺には準多重劣調和関数による特異性と、未知関数への滑らかな依存性を許す。この依存性は減少する場合も含むため、単調性による標準的な一意性の議論を前提にできない。

主結果は、データの正則領域から背景の特異集合を除いた場所で、有界解が滑らかになるというものである。証明は補助方程式の一様評価と支配原理を使う。klt空間の正則部分での滑らかさや、順序付けられた上下解の間の解の存在も帰結として扱われる。

## 背景と問題設定

$X$ を $n$ 次元コンパクトHermitian多様体、$\omega_X$ を固定したHermitian形式とする。滑らかな半正値 $(1,1)$-形式 $\theta$ がbigであるとは、本論文では、解析集合 $D$ に沿う解析的特異性をもつ $\rho$ と $\epsilon_0>0$ が存在し、$\theta+dd^c\rho\ge2\epsilon_0\omega_X$ となることをいう。

調べる方程式は

<div>
$$
(\theta+dd^c u)^n
=e^{f(\cdot,u)+\psi^+-\psi^-}\omega_X^n.
$$
</div>

ここで $f:X\times\mathbf R\to\mathbf R$ は滑らかで、$\psi^\pm$ は準psh関数であり、固定した開集合 $\Omega$ 上では滑らかとする。$\Omega$ はZariski開集合である必要はなく、小さな通常の開集合でもよい。

正の滑らかな右辺をもつ場合には、Kählerの場合のSzékelyhidi–Tosatti、Hermitianの場合のNieやKołodziej–Nguyenによる既存研究がある。本論文は流の平滑化による方法と異なる議論を与え、特異な密度や退化する背景形式へ柔軟に適用する。

## 主結果

### 主定理1：有界解の正則性（Theorem 1.1）

上の方程式を満たす有界な $\theta$-psh関数 $\varphi$ が存在すれば、$\varphi$ は $\Omega\setminus D$ 上で滑らかである。右辺の $f(\cdot,t)$ が $t$ に関して非減少であることは要求しない。

結論は有界解が与えられたときの正則性であり、一般の $f$ に対する存在や一意性を保証するものではない。Introductionも、単調性を失うと解が存在しない場合や、一意でない場合があると注意する。

### 帰結：klt空間の正則部分（Corollary 1.2）

$V$ をklt特異点をもつコンパクト複素空間とし、Hermitian形式 $\omega_V$、適合測度 $\mu_V$、滑らかな $f:V\times\mathbf R\to\mathbf R$ を備えるとする。このとき

<div>
$$
(\omega_V+dd^c u)^n=e^{f(\cdot,u)}\mu_V,
\qquad \omega_V+dd^c u\ge0
$$
</div>

の任意の有界解は $V_{\mathrm{reg}}$ 上で滑らかである。特異点解消へ引き戻すことでTheorem 1.1の形に帰着する。Introductionは、kltな $\mathbf Q$-FanoコンパクトKähler空間上の特異Kähler–Einstein計量が、正則部分で滑らかになる場合も挙げる。

### 主定理2：順序付けた上下解からの存在（Theorem 1.3）

有界な下解 $\underline u$ と上解 $\overline u$ がともに $\operatorname{PSH}(X,\theta)$ に属し、$\underline u\le\overline u$ を満たすなら、その間に有界解 $u$ が存在する。

<div>
$$
\underline u\le u\le\overline u\quad\text{on }X.
$$
</div>

IntroductionのTheorem 1.3は、この解が $\Omega$ 上で滑らかとも述べる。一般の右辺では上下解の順序が重要であり、順序関係のない下解と上解の存在だけでは十分でない例を挙げる。一方、$f$ が未知関数について非減少の場合には、順序を仮定しない存在結果も後続のTheorem 5.4として紹介される。

## 証明の見取り図

Introductionはまず $\theta=\omega$ がKähler、$\psi^\pm=0$ の場合で考え方を説明する。与えられた有界解 $\varphi$ を滑らかな $\omega$-psh関数 $v_j$ で上から近似し、各 $j$ について

<div>
$$
(\omega+dd^c u_j)^n
=e^{u_j-v_j+f(\cdot,v_j)}\omega_X^n
$$
</div>

という補助方程式を解く。未知関数は $u_j$ であり、元の非単調な依存性を $v_j$ に代入して固定する点が要である。

$v_j$ に依存しない一様評価を得ると、部分列の極限として滑らかな $u$ が得られ、

<div>
$$
(\omega+dd^c u)^n=e^{u-\varphi+f(\cdot,\varphi)}\omega_X^n
$$
</div>

を満たす。支配原理により $u=\varphi$ と分かり、元の弱解の滑らかさが従う。一様評価の発想はMonge–Ampère固有値問題の研究に動機付けられている。

論文はこの方法を退化Kählerの場合、Hermitianの場合へ展開し、最後に上下解の存在問題を扱う。ここではIntroductionに示された補助方程式と論理の流れのみを説明し、後続節の微分評価を再構成してはいない。

## 原論文との対応

- **確認箇所:** Abstract、Introduction（PDF 1–3頁）。
- **主結果:** Theorems 1.1、1.3、Corollary 1.2。Theorem 1.1の $\Omega\setminus D$ と、Theorem 1.3に記された $\Omega$ は原文どおり区別した。
- **証明方針:** IntroductionのKählerの場合の補助方程式による説明に基づく。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
