---
layout: paper
title: Lower bound of the Calabi functional and non-Archimedean K-energy
title_ja: Calabi汎関数の下限と非Archimedean Kエネルギー
authors: Tomoyuki Hisamoto
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We prove Donaldson's conjecture which describes the infimum of the Calabi functional by the normalized non-Archimedean K-energy. The proof makes use of proximal equation for the K-energy. To obtain approximate smooth solutions, a continuity path of prescribed scalar curvature equation is coupled with a version of Chen's $\e$-subgeodesic. It does not require a global smooth solution to the Calabi flow.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- pluripotential-theory
- monge-ampere-equations
arxiv_id: 2611.11938v1
arxiv_url: https://arxiv.org/abs/2611.11938
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: K不安定な滑らかな偏極多様体上で、Calabi汎関数の下限が、試験配置の非Archimedean KエネルギーをL²ノルムで正規化した量の上限に一致することを示す。滑らかなCalabi流の大域存在を仮定せず、近接作用素と測地線の近似を用いてDonaldsonの下界の鋭さを証明する。
abstract_en: ''
summary_en: 'The paper compares two measurements of instability of a polarized manifold: scalar-curvature variation and degenerations encoded by test configurations. In the K-unstable case, their optimal values agree after an L² normalization. A proximal construction bridges the completed space of potentials and smooth metrics. The argument also controls the denominator when replacing geodesic rays by algebraic degenerations.'
abstract_ja: 滑らかな複素射影偏極多様体がK不安定であるとき、スカラー曲率の平均からのずれのL²ノルムの下限を、代数的試験配置によって特徴付ける。Kエネルギーの近接方程式を、指定スカラー曲率方程式の連続経路とChenのε-部分測地線を連成させて近似する。これにより、Calabi流の滑らかな長時間解に依存せずに下界の等号を得る。
abstract_source_url: https://arxiv.org/abs/2611.11938
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.11938v1](https://arxiv.org/abs/2611.11938)
- **著者:** Tomoyuki Hisamoto
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi汎関数は、Kähler計量のスカラー曲率が定数からどれだけ離れているかを測る。一方、偏極多様体を退化させる試験配置には、K安定性を判定する非Archimedean Kエネルギーが付随する。Donaldsonは後者から前者の下界を与え、その下界が鋭いと予想した。

本論文はK不安定な滑らかな複素射影偏極多様体について、この予想の等式を証明する。解析側ではすべての滑らかなKähler計量を動かした下限、代数側では非零ノルムの正規豊富試験配置を動かした上限を比較する。

新しい点は、滑らかなCalabi流の大域存在に頼らず、Kエネルギーの近接作用素を滑らかな計量で近似することである。有限エネルギー測地線の代数的近似では、エネルギーだけでなくL²ノルムの分母を回復する点も重要となる。

## 背景と問題設定

$(X,L)$を複素次元$n\ge1$の滑らかな射影偏極多様体とし、$\omega\in c\_1(L)$、$V=L^n$とする。本論文の規約では平均スカラー曲率は$\overline S=-nV^{-1}(K\_XL^{n-1})$で、Calabi汎関数は二乗そのものではなく

$$
\operatorname{Cal}(\omega)=\left[\frac1V\int\_X(S(\omega)-\overline S)^2\omega^n\right]^{1/2}
$$

である。基準計量$\omega\_0$に対し$\mathcal H=\lbrace \varphi\in C^\infty(X,\mathbb R):\omega\_0+dd^c\varphi>0\rbrace $を取る。MabuchiのKエネルギー$M$は

$$
(d\_\varphi M)\_f=-\frac1V\int\_X f(S(\omega\_\varphi)-\overline S)\omega\_\varphi^n
$$

によって定まる。

試験配置$(\mathcal X,\mathcal L)$のノルムは、確率Duistermaat–Heckman測度$\mu\_{(\mathcal X,\mathcal L)}$の分散の平方根

$$
\Vert (\mathcal X,\mathcal L)\Vert \_2=\left[\int\_{\mathbb R}(\lambda-\overline\lambda)^2\thinspace d\mu\_{(\mathcal X,\mathcal L)}(\lambda)\right]^{1/2}
$$

である。すべての試験配置で$M^{\mathrm{NA}}\ge0$ならK半安定、それ以外をK不安定とする。

## 主結果

### 主定理：Donaldsonの下界の鋭さ（Theorem 1.1）

K不安定な$(X,L)$について

$$
\inf\_{\varphi\in\mathcal H}\operatorname{Cal}(\omega\_\varphi)
=\sup\_{(\mathcal X,\mathcal L)}\frac{-M^{\mathrm{NA}}(\mathcal X,\mathcal L)}{\Vert (\mathcal X,\mathcal L)\Vert \_2}
$$

が成り立つ。右辺は非零ノルムを持つ正規・豊富・代数的な試験配置を動かす。K不安定性を落として任意の偏極多様体にこの形の等式を主張する定理ではない。

Donaldsonの既知の結果は左辺が右辺以上となる方向であり、本論文は逆向きを示す。最適な退化が存在して上限を最大値に置き換えられるかという、より強い問題は扱わない。下限を達成する滑らかな計量の存在もこの等式だけからは従わない。

## 証明の見取り図

出発点は、滑らかなポテンシャル空間の距離完備化$(\mathcal E^2,d\_2)$において、Kエネルギーの最大下降率と測地線に沿う無限遠の傾きの間の等式を与えたXiaの結果である。残る課題は、完備化での下降率の下限を滑らかなCalabi汎関数で回復することと、測地線を代数的試験配置で近似することである。

前者では、$\tau>0$と$u\_0\in\mathcal H$に対し

$$
M(u)+\frac{d\_2(u,u\_0)^2}{2\tau}
$$

の最小化で定まるK-resolventを使う。指定スカラー曲率方程式の連続経路にε-部分測地線を連成し、終端速度を制御する。ポテンシャルの$C^0$評価と境界混合二階微分評価を組み合わせ、Leray–Schauderの次数法で近似解を得る。最後に$\varepsilon\to0$、$\tau\to\infty$とする。

後者では、Darvas–Lu、Li、Trusiani、Boucksom–Jonssonらの測地線・モデル包絡・Fujita近似の結果を組み合わせる。ただし非ArchimedeanのL¹距離とエントロピーの収束だけではL²ノルムは回復できない。高次モーメントの評価を加えることにより、等式の分母も近似できるようにする。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.11938)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.11938v1) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorem 1.1; equations (1.1), (1.3)–(1.6)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.11938v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
