---
layout: paper
title: Calabi flow in the controlled Kähler cone
title_ja: controlled Kähler coneにおけるCalabi flowの極限と実類での連続法
authors: Haozhao Li, Bing Wang, Kai Zheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that the geometric limit of a global Calabi flow in a real class of the controlled Kähler cone is independent of the initial metric. Under cohomological K-polystability, the limit is a smooth cscK metric in the original class and complex structure. We also establish varying-class closedness and an equivariant continuity method. We apply this method to construct a smoothly varying family of cscK metrics throughout an explicit interval of symmetric real Kähler classes on the blow-up of the projective plane at four points in general position.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- curvature
arxiv_id: 2611.19934v1
arxiv_url: https://arxiv.org/abs/2611.19934
arxiv_submitted: '2026-11-15'
arxiv_updated: '2026-11-15'
summary: コンパクトKähler曲面の実Kähler類に対し、低い初期Calabiエネルギーから始まる流れの幾何学的極限が初期計量に依存しないことを示す。コホモロジー的K多重安定性のもとでは元の曲面・元の類にcscK計量が得られ、類を動かす連続法にもつながる。
abstract_en: ''
summary_en: An irrational Kähler class cannot serve directly as the first Chern class of an embedding bundle. The authors address this difficulty by retaining cohomological markings together with several auxiliary polarizations. Under an explicit energy condition, they identify the Calabi-flow limit independently of its initial metric. Cohomological stability then distinguishes an extremal orbifold limit from a smooth cscK metric on the original surface, and a separate compactness argument permits continuation in the class.
abstract_ja: 本論文はcontrolled Kähler cone内の実類について、所定のエネルギー条件を満たすCalabi flowの極限を比較する。同じ複素曲面と類から始まる流れは、初期計量によらず同じ正則等長類のextremal orbifoldへ収束する。K半安定性は極限のスカラー曲率を一定にし、K多重安定性は極限を元の曲面・元の類の滑らかなcscK計量と同定する。さらに類を変化させた閉性と同変連続法を示し、射影平面の4点blowup上の実類の区間に応用する。
abstract_source_url: https://arxiv.org/abs/2611.19934
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.19934v1](https://arxiv.org/abs/2611.19934)
- **著者:** Haozhao Li, Bing Wang, Kai Zheng
- **初回投稿日:** 2026-11-15
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi flowはKähler計量をスカラー曲率がより標準的な状態へ動かす方法である。しかし、長時間存在だけでは極限の一意性、元の複素構造との一致、Kähler類の保持までは分からない。本論文は曲面上の特定の円錐と初期エネルギー条件のもとで、これらを分けて解決する。

最初の結論は、実Kähler類を固定したとき、許容されるどの初期計量からも同一のextremal Kähler orbifoldの正則等長類へ収束するというものである。この段階では類の有理性やK安定性を仮定しない。

次にコホモロジー的K半安定性・K多重安定性を課すことで、極限がcscKとなること、さらに滑らかで元の曲面と元の類に戻ることを示す。加えて、類を動かす際の閉性を別途証明し、実パラメータ族全体でcscK計量を構成する。

## 背景と問題設定

$M$ をコンパクト連結Kähler曲面、$c=c\_1(M)$、$\mathcal K\_M$ を実Kähler coneとする。論文では $[\omega]=2\pi\Omega$ と正規化し、$S$ はRiemannianスカラー曲率の半分である複素スカラー曲率を表す。Calabiエネルギーを

$$
C(\omega)=\int\_M(S\_\omega-\overline S)^2\frac{\omega^2}{2}
$$

とおく。対象のconeと初期条件は

$$
\mathcal U=\left\lbrace \Omega\in\mathcal K\_M:c\cdot\Omega>0,\quad
\delta(\Omega):=c^2-\frac{2(c\cdot\Omega)^2}{3\Omega^2}>0\right\rbrace ,
\qquad C(\omega\_0)<8\pi^2\delta(\Omega).
$$

この数値条件を一般のKähler類へ無条件に拡張してはならない。既存の長時間存在定理は、この範囲で滑らかな流れと一様Sobolev評価を供給する。有理偏極の場合の先行研究に対し、本論文の課題は無理な実類を正確に保持することである。

## 主結果

### 極限の一意性（Theorem 1.1 (1)）

上記条件を満たす $\omega\_0\in2\pi\Omega$ からのCalabi flowのすべての部分列極限は、ある一つのコンパクトextremal Kähler orbifold $(Z,J\_Z,\omega\_Z)$ に正則等長である。流れ全体がその正則等長類へ幾何学的に収束し、極限は $(M,J,\Omega)$ のみに依存する。正次元の自己同型群も許される。

### 安定性が与える平滑化と類の保持（Theorem 1.1 (2)–(3)）

$(M,\Omega)$ がコホモロジー的K半安定なら、極限計量はcscKとなるが、orbifold特異点は残り得る。K多重安定なら $Z$ は滑らかで、双正則写像 $F:M\to Z$ が存在し、

$$
F^\ast \Omega\_Z=\Omega,\qquad \Omega\_Z=[\omega\_Z]/(2\pi)
$$

が成立する。従って $F^\ast \omega\_Z$ は元の曲面上の類 $2\pi\Omega$ の滑らかなcscK計量となる。Introductionは、正規・被約・既約な中心ファイバーを持つコホモロジー的test configurationに符号条件と積の場合の等号条件を課せば十分とも述べる。

### 実類の連続法と応用（Theorem 1.1 (4)）

さらに $\operatorname{Aut}\_0(M)=\lbrace 1\rbrace $ とし、出発類を含む連結集合 $D\subset\mathcal U$ の各類がコホモロジー的K多重安定とする。このとき各 $2\pi B$、$B\in D$ に一意な滑らかなcscK計量が存在し、局所的に $B$ へ滑らかに依存する。

応用では、一般位置の4点での $X=\operatorname{Bl}\_{p\_1,\ldots,p\_4}\mathbb P^2$ に対し、$H$ を直線類の引き戻し、$E=E\_1+\cdots+E\_4$ とおく。別途検証した同変安定性のgapを用い、

$$
2\pi(aH-E),\qquad 3\le a<8+\frac{10}{\sqrt3}
$$

の全域で一意な滑らかな $S\_4$-不変cscK計量を得る。coneの不等式だけからこの存在を結論しているわけではない。

## 証明の見取り図

無理な類には直接対応する線束がないため、コホモロジーのmarkingと有限個の補助線束を使って元の類を正係数の組合せとして保持する。一様な射影埋め込みと切断空間のGram行列の収束により、異なる部分列や異なる初期計量の極限を比較する。有理スペクトルの議論は可算性の議論で置き換えられる。

極限を中心ファイバーとする退化を構成すると、cscKでない極限は負のDonaldson–Futaki不変量を生み、半安定性に反する。cscK極限では不変量が0となり、多重安定性が退化を積にする。類を動かす段階では、別の静的コンパクト性による閉性と陰関数定理による開性を組み合わせる。

収束は部分列ごとの幾何学的同定を用いた正則等長類への収束であり、固定座標での滑らかな収束やtest configurationの一意性を主張するものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.19934)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.19934v1) — Section 1, pp. 2–6
- **Introduction中で言及された主要結果:** Theorem 1.1、IntroductionのApplication
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.19934v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
