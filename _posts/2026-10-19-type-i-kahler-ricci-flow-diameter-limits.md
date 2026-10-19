---
layout: paper
title: Type I estimates for the Kähler-Ricci flow II
title_ja: 有限時間Kähler–Ricci流の直径評価・極限・接ソリトン
authors: Wangjian Jian, Jian Song
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we establish geometric consequences of our Type I scalar curvature estimate for finite-time solutions of the K\"ahler-Ricci flow on compact K\"ahler manifolds. We prove a uniform global diameter bound and a Type I diameter bound for every fibre of finite time holomorphic contraction. These estimates yield Gromov-Hausdorff convergence to a unique compact metric space homeomorphic to the normal K\"ahler space determined by the limiting cohomology class. We also establish a local partial $C^0$ estimate for the normalized flow and show that the tangent shrinkers are normal complex analytic varieties with log terminal singularities.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- metric-limits
- singularities
- minimal-model-program
arxiv_id: 2610.22941v1
arxiv_url: https://arxiv.org/abs/2610.22941
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: コンパクトKähler多様体の有限時間Kähler–Ricci流について、全体の一様直径評価と収縮ファイバーのType I直径評価を証明する。射影性や初期類の有理性を仮定せず、Gromov–Hausdorff極限を正規Kähler空間と同定し、拡大極限のlog terminal特異点も記述する。
abstract_en: In this paper, we establish geometric consequences of our Type I scalar curvature estimate for finite-time solutions of the K\"ahler-Ricci flow on compact K\"ahler manifolds. We prove a uniform global diameter bound and a Type I diameter bound for every fibre of finite time holomorphic contraction. These estimates yield Gromov-Hausdorff convergence to a unique compact metric space homeomorphic to the normal K\"ahler space determined by the limiting cohomology class. We also establish a local partial $C^0$ estimate for the normalized flow and show that the tangent shrinkers are normal complex analytic varieties with log terminal singularities.
summary_en: ''
abstract_ja: 著者らは前編のスカラー曲率のType I評価を出発点に、有限特異時刻での距離幾何を解析する。非拡大の流れは極限コホモロジー類が定める収縮先へ収束し、ファイバーは放物型の速度で縮む。Type Iスケールの拡大では部分列に沿う特異縮小ソリトンの存在と正規複素解析構造を示すが、その一意性と最適退化との対応は予想として残る。
abstract_source_url: https://arxiv.org/abs/2610.22941
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.22941v1](https://arxiv.org/abs/2610.22941)
- **著者:** Wangjian Jian, Jian Song
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

Kähler–Ricci流を極小モデル理論の解析的な実現と考えるには、特異時刻でどこが縮み、どの空間へ収束し、拡大するとどのような局所モデルが見えるかを知る必要がある。本論文は前編のType Iスカラー曲率評価から、これらの距離幾何学的帰結を導く。

非拡大の流れでは、多様体全体の直径は一様有界であり、収縮写像の各ファイバーの直径は残り時間の平方根で抑えられる。流れは極限コホモロジー類が定める正規Kähler空間と同相な距離空間へGromov–Hausdorff収束する。

特異点をType Iスケールで拡大すると、部分列に沿って特異縮小Kähler–Ricciソリトンが得られ、その空間はlog terminal特異点を持つ正規複素解析多様体となる。ここで証明するのは部分列極限の存在と構造であり、接ソリトンの一意性や最適退化との同定は未解決の予想として区別される。

## 背景と問題設定

$X$を複素次元$n\geq2$のコンパクトKähler多様体とし、最大存在時間が有限の非正規化流

$$
\partial\_t\omega=-\operatorname{Ric}(\omega),\qquad \omega(0)=\omega\_0,\qquad 0\leq t<T<\infty
$$

を考える。$g(t)=2\omega(t)(\cdot,J\cdot)$、$d\_t=d\_{g(t)}$とする。極限類

$$
\alpha=[\omega\_0]-2\pi T c\_1(X)=\Phi^*[\theta\_Y]
$$

は、連結ファイバーを持つ全射正則写像$\Phi:X\to Y$を定める。$Y$はコンパクト正規Kähler空間である。Hacon–Xieの超越的base-point-free定理を用いるため、$X$の射影性も$[\omega\_0]$の有理性も仮定しない。ファイバーの直径は、ファイバー内部の道だけを許す距離ではなく、周囲の$X$の距離$d\_t$で測る。

## 主結果

### 全体とファイバーの直径（Theorem 1.1）

初期データと固定した背景選択だけに依存する$C>0$が存在して、全ての$t<T$、$y\in Y$について

$$
\operatorname{Diam}(X,g(t))\leq C,\qquad
\operatorname{Diam}\_{d\_t}\Phi^{-1}(y)\leq C(T-t)^{1/2}
$$

が成り立つ。前編の$|R\_{g(t)}|\leq C/(T-t)$と合わせ、本文のConjecture 1.1を解決する。$Y$が一点ならPerelmanのFano多様体での直径評価に対応し、一般には各収縮ファイバーへ拡張する。

### 非拡大の極限（Theorem 1.2）

$t\to T$で$(X,g(t))$はコンパクト距離空間$(Y,d\_T)$へGromov–Hausdorff収束する。$d\_T$が定める位相は$Y$の複素解析的位相に一致する。体積崩壊する場合もしない場合も含む。

非崩壊の場合には、収縮が双有理となり、適切な正則開集合$Y^\circ$上で滑らかな極限計量$g\_T$が得られる。その内在距離$d\_T^\circ$と極限距離は、ある$\kappa\in(0,1)$について

$$
d\_T(y,y')\leq d\_T^\circ(y,y')\leq C d\_T(y,y')^\kappa
$$

を満たす。この位相的同定が、解析的極小モデル理論の収縮の像と距離極限を結ぶ。

### Type I拡大極限（Theorem 1.3）

固定点$x\in X$、任意の$\tau\_i\to0$に対して

$$
g\_i(s)=\tau\_i^{-1}g(T+\tau\_i s),\qquad s<0
$$

の部分列は、完備な特異縮小Kähler–Ricciソリトン流へ収束する。時刻$-1$の距離空間を$(Z,d)$とすると、各$s<0$で極限は距離を$\sqrt{|s|}$倍した同じ空間$Z$となる。

稠密な正則部分には$g\_Z$とポテンシャル$f$があり、

$$
\operatorname{Ric}\_{g\_Z}+\nabla^2\_{g\_Z}f=\frac12g\_Z
$$

を満たす。距離完備化は$Z$で、特異集合の実Minkowski余次元は少なくとも4、各距離接錐はRicci平坦Kähler錐である。$Z$はlog terminal特異点を持つ正規複素解析空間であり、解析的位相と距離位相、解析的正則部分と距離的正則部分が一致する。

接ソリトンの一意性と、標点付き収縮の代数的最適退化であるという主張はConjecture 1.3である。Theorem 1.2の非拡大極限の収束と混同してはならない。

## 証明の見取り図

全体の直径評価には、固定Kähler類の補助計量を通じてGuo–Song–Sturmの距離のHölder評価を適用する。ファイバーの評価では、熱核と後退熱流のWasserstein収縮から異なる時刻の距離を比較し、ファイバー内の正則写像のエネルギー消滅と結び付ける。

拡大極限にはBamlerの熱核・エントロピー・コンパクト性理論と、そのKähler版を用いる。前編のスカラー曲率評価が、元の多様体の固定点でこれらの定理を適用する条件を与える。局所partial $C^0$評価のための局所偏極も前編のポテンシャルから得られ、初期類の有理性が不要となる。正規解析構造とlog terminal性にはHallgren–Zhangの結果を使う。

## 原論文との対応

- **Abstractページ:** [Type I estimates for the Kähler-Ricci flow II](https://arxiv.org/abs/2610.22941)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.22941v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3; Conjecture 1.3は未解決
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.22941v1
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
