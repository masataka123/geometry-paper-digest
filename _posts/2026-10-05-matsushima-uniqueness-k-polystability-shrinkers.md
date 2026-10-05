---
layout: paper
title: A Matsushima theorem, uniqueness and K-polystability for Kähler-Ricci shrinkers
title_ja: 非コンパクトKähler–Ricci縮小ソリトンの松島定理と一意性
authors: Carlos Esparza, Junsheng Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: |-
  For noncompact smooth Kähler-Ricci shrinkers, we prove a Matsushima theorem identifying the centralizer of the soliton field with the complexification of its Killing centralizer, uniqueness up to biholomorphism on a fixed complex manifold, and K-polystability of the associated polarized Fano fibration.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- k-stability
- noncompact-kahler-geometry
- pluripotential-theory
arxiv_id: 2610.03592v1
arxiv_url: https://arxiv.org/abs/2610.03592
arxiv_submitted: '2026-10-02'
arxiv_updated: '2026-10-02'
summary: |-
  完備な非コンパクトKähler–Ricci縮小ソリトンについて、曲率条件なしに松島型分解、双正則写像を除く計量の一意性、対応する偏極FanoファイブレーションのK多重安定性を示す。代数的な斉次座標の成長を計量の評価に結び付けることで、従来の曲率仮定を取り除く。
abstract_en: ''
summary_en: |-
  The article removes curvature restrictions from three structural results for complete noncompact Kähler–Ricci shrinkers. Its analytic estimates are obtained from the algebraic coordinates supplied by a polarized Fano fibration. These estimates support both a Lie-algebra decomposition and the comparison of different shrinker metrics. A pluripotential framework then connects metric uniqueness with K-polystability.
abstract_ja: |-
  非コンパクトな滑らかなKähler–Ricci縮小ソリトンを対象に、ソリトン場と可換な正則ベクトル場のLie環をKilling場から記述する松島型定理を証明する。また、固定した複素多様体上で双正則写像を除いた計量の一意性と、付随する偏極FanoファイブレーションのK多重安定性を示す。いずれにも追加の曲率仮定を置かない。
abstract_source_url: https://arxiv.org/abs/2610.03592
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.03592v1](https://arxiv.org/abs/2610.03592)
- **著者:** Carlos Esparza, Junsheng Zhang
- **初回投稿日:** 2026-10-02
- **最終更新日:** 2026-10-02
- **主分類・副分類:** math.DG（主分類）、math.AG（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci縮小ソリトンはRicci流の特異点モデルであり、非コンパクトな複素多様体上の標準計量でもある。コンパクトの場合に知られる対称性、一意性、安定性の関係を、非コンパクトの場合にどこまで維持できるかが問題となる。

著者らは完備な非コンパクト縮小ソリトンに対し、松島型のLie環分解、固定した複素多様体上での計量の一意性、対応する偏極FanoファイブレーションのK多重安定性を証明する。従来の結果が課していた曲率の有界性や減衰などの条件を加えない点が中心である。

代数的なファイブレーション構造から得られる正則関数・反多重標準切断の成長を、ソリトン計量に関する評価に変換する。その評価を重み付き可積分性と多重ポテンシャル論の双方に使うことで、三つの結論を共通の解析的基盤に載せている。

## 背景と問題設定

対象は完備な非コンパクト勾配縮小Kähler–Ricciソリトン $(X^n,\omega,J,f)$ である。論文は

<div>
$$
\operatorname{Ric}(\omega)+\sqrt{-1}\,\partial\bar\partial f=\omega,
\qquad \Delta_\omega f+f-|\nabla^{1,0}f|^2=0
$$
</div>

と規格化し、$\xi=J\nabla f$ をソリトンベクトル場と呼ぶ。ここで用いる $\xi$ は実正則なKilling場である。関連する文献で勾配場そのものをソリトン場と呼ぶ場合とは記号の約束が異なる。

## 主結果

### 主定理1：非コンパクト松島定理（Theorem 1.1）

$\xi$ と可換な実正則ベクトル場のLie環 $\mathfrak h_\xi$ は、$\xi$ と可換な実正則Killing場のLie環 $\mathfrak k_\xi$ を用いて

<div>
$$
\mathfrak h_\xi=\mathfrak k_\xi\oplus J\mathfrak k_\xi
$$
</div>

と分解する。縮小ソリトンの正則な対称性を計量の対称性から記述する結果であり、追加の曲率条件を必要としない。

### 主定理2：計量の一意性（Theorem 1.2）

同じ複素多様体 $X$ 上の二つの縮小ソリトン $(\omega_i,f_i,\xi_i)$、$i=0,1$ に対し、ある $\Psi\in\operatorname{Aut}(X)$ が存在して

<div>
$$
\Psi^*\omega_1=\omega_0,\qquad \Psi_*\xi_0=\xi_1
$$
</div>

となる。単にソリトン場が一致するという結果より強く、計量自体を双正則写像で同一視できる。

### 主定理3：K多重安定性（Theorem 1.3）

縮小ソリトンに付随する偏極Fanoファイブレーションは、論文が参照するSun–Zhangの意味でK多重安定である。これは縮小ソリトンの存在から代数的安定性を導く向きの主張であり、Introductionは逆向きの一般的存在定理を主張していない。

### 臨界点におけるポテンシャルの一様評価（Theorem 1.4）

複素次元 $n$ だけに依存する定数 $C_n$ が存在し、上記の規格化の下で

<div>
$$
\nabla f(x)=0\quad\Longrightarrow\quad f(x)\le C_n
$$
</div>

が成り立つ。ソリトン場の零点集合のコンパクト性について、共役熱核による解析的証明を与え、次元だけに依存する評価へ強めた結果である。

## 証明の見取り図

偏極Fanoファイブレーションから $\mathbb P^N\times\mathbb C^M$ への埋め込みを得る。斉次正則関数の多項式成長評価とSchwarz型の計量下界を組み合わせ、$\rho=\sqrt{f+n}$ に対して、コンパクト集合の外で

<div>
$$
|\nabla^{1,0}f|^2=\rho^2-R_\omega\ge c\rho^2
$$
</div>

を得る。これを出発点として周囲の基準計量との比較と重み付き積分評価を導き、松島定理とソリトン場の一意性に必要な可積分性を確保する。

次に反標準束の重みの二次成長を利用して多重ポテンシャル論を整え、その成長条件を保つ測地線の存在を確立する。測地線に沿う凸性と試験配置に付随する測地線半直線を用いることで、計量の一意性とK多重安定性へ進む。Introductionは、ソリトン場の一意性と松島定理がConlon–Deruelleによって独立にも証明されたことを明記している。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.03592)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.03592v1)、Section 1, pp. 2–3。
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4。
- **論文構成の説明:** §1.2, p. 3。
- **確認したarXivバージョン:** 2610.03592v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
