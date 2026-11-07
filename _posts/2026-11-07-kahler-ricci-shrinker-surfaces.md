---
layout: paper
title: On Kähler Ricci shrinker surfaces
title_ja: 曲率仮定を外したKähler Ricci shrinker曲面の分類
authors: Yu Li, Bing Wang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we prove that any K\"ahler Ricci shrinker surface has bounded sectional curvature. Combining this estimate with earlier work by many authors, we provide a complete classification of all K\"ahler Ricci shrinker surfaces.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
- noncompact-kahler-geometry
- metric-limits
arxiv_id: 2301.09784v2
arxiv_url: https://arxiv.org/abs/2301.09784v2
arxiv_submitted: '2023-01-24'
arxiv_updated: '2025-02-17'
summary: 完備な複素2次元Kähler Ricci shrinkerの曲率が自動的に有界となることを示す。既知の分類と組み合わせ、曲率有界性を仮定しない完全分類を得る。
abstract_en: In this paper, we prove that any K\"ahler Ricci shrinker surface has bounded sectional curvature. Combining this estimate with earlier work by many authors, we provide a complete classification of all K\"ahler Ricci shrinker surfaces.
summary_en: ''
abstract_ja: 複素2次元の完備Kähler Ricci shrinkerについて、スカラー曲率と断面曲率が有界であることを証明する。これを既存の分類結果と合わせることで、曲率に追加仮定を置かず全てのKähler Ricci shrinker曲面を分類する。高曲率点の周囲をsteady soliton orbifoldまたは円筒型Kähler Ricci flowで記述する標準近傍定理が、曲率有界性の核心となる。
abstract_source_url: https://arxiv.org/abs/2301.09784v2
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2301.09784v2](https://arxiv.org/abs/2301.09784v2)
- **著者:** Yu Li, Bing Wang
- **初回投稿日:** 2023-01-24
- **最終更新日:** 2025-02-17
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

Ricci flowの特異点を拡大すると、自己相似的に縮むRicci shrinkerが極限モデルとして現れる。その分類は、どのような特異点が起こり得るかを理解する基礎になる。実4次元、特に複素2次元のKählerの場合にも多くの分類が知られていたが、曲率が有界であるという仮定が残っていた。

本論文の新しい部分は、完備なKähler Ricci shrinker曲面で曲率が自動的に有界であることを示す点にある。したがって従来の有界曲率下の分類を全ての対象へ適用でき、コンパクトなFano曲面と四種類の非コンパクトモデルからなる分類が完成する。

曲率の有界性は直接の最大値原理だけで得られるわけではない。無限遠の点を曲率に応じて拡大し、steady soliton orbifoldまたは複素円筒型の流れが現れることを示す。これによって高曲率が現れた場合の伝播を制御し、スカラー曲率の平均に関する恒等式との矛盾を導く。

## 背景と問題設定

Ricci shrinkerは、完備Riemann多様体 $(M,g)$ とポテンシャル $f$ が

$$
\operatorname{Ric}+\operatorname{Hess}f=\frac12g,\qquad
R+|\nabla f|^2=f
$$

を満たすものである。Kählerの場合は複素構造 $J$ と両立し、$\nabla f$ が正則ベクトル場になる。ここでいう曲面は複素次元二、実次元四である。

既存研究により、スカラー曲率が有界なら全曲率も有界となり、非コンパクト例の分類ができていた。本論文は分類を最初から作り直すのではなく、その適用を制限していた有界性仮定を取り除く。

## 主結果

### 曲率を仮定しない完全分類（Theorem 1.1）

任意のKähler Ricci shrinker曲面は、双正則かつ等長という意味で次のいずれかである。

- コンパクトなFano曲面上のKähler Ricci shrinker。
- $\mathbb C^2$ 上のGaussian soliton。
- $\mathbb C^2$ の一点blow-up上のFeldman–Ilmanen–Knopf shrinker。
- $\mathbb P^1\times\mathbb C$ 上の標準的な積のshrinker。
- $\mathbb P^1\times\mathbb C$ の一点blow-up上のBamler–Cifarelli–Conlon–Deruelle shrinker。

コンパクト側ではdel Pezzo曲面が現れ、各複素構造上のshrinker計量の一意性は自己同型の作用を除いて理解する。最後の非コンパクトモデルの存在は先行研究によるものであり、本論文が新たに全ての計量を構成するという内容ではない。

### スカラー曲率と断面曲率の有界性（Theorem 1.2）

全ての完備Kähler Ricci shrinker曲面に対して

$$
\sup\_M R<\infty,\qquad \sup\_M|\operatorname{Rm}|<\infty
$$

が成り立つ。これが論文の主たる新しい評価であり、Theorem 1.1はこの評価と既存の分類を合わせた結論である。複素次元二という条件は証明の一部であり、高次元への拡張はIntroductionでは予想として扱われる。

### 無限遠の標準近傍（Theorem 1.3）

エントロピーの下界 $\mu(g)\geq-A$ を固定すると、$\varepsilon,\delta$ に応じた正数 $\sigma,L$ があり、次の二つの局所モデルを得る。

第一に、$R(x)\geq\delta f(x)$ かつ $f(x)\geq L$ なら、適切に拡大した近傍は孤立特異点をもつKähler steady soliton orbifoldに近い。さらに

$$
R(y)\geq L^{-1}f(x),\qquad
 y\in B\bigl(x,\varepsilon^{-1}R(x)^{-1/2}\bigr)
$$

という下界が得られる。第二に、

$$
R(x)+R(x)^{-1}\leq\sigma f(x)
$$

なら、拡大した時空間近傍は標準的な $\mathbb P^1\times\mathbb C$ のKähler Ricci flowに近い。

Introductionの説明では、前者の近さはGromov–Hausdorff的で、特異点を除けば滑らかになり、後者は流れとして滑らかな近さである。両者を同じ種類の収束として扱わない。

## 証明の見取り図

標準近傍定理の第一の場合には、縮むスケールでも働く非崩壊評価と局所共形変換によって、従来の弱コンパクト性を強化する。第二の場合にはBamlerの $\mathbb F$ コンパクト性から弱い極限を得た後、局所スカラー曲率評価と $\nabla f$ の時空間での制御から直線方向の分裂を作る。

Kähler構造による対称性と接流の議論で特異点を除き、極限を通常の古代Kähler Ricci flowとして扱えるようにする。低次元の古代解の分類が、円筒 $\mathbb P^1\times\mathbb C$ を特定する役割を担う。

最後に $f$ の勾配流に沿ってスカラー曲率を追う。有界でない場合は高曲率が無限遠へ一様に広がり、平均スカラー曲率も発散する。しかしshrinker方程式の跡である

$$
R+\Delta f=2
$$

を積分した関係と矛盾する。これにより曲率有界性を得て、先行研究の分類へ接続する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2301.09784v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2301.09784v2) — Section 1, pp. 1–8（Section 2開始直前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2301.09784v2
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
