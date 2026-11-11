---
layout: paper
title: Analytic tangent cones of admissible Hermitian-Yang-Mills connections
title_ja: Hermitian–Yang–Mills接続の接錐とバブリングの代数的記述
authors: Xuemiao Chen, Song Sun
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper we study the analytic tangent cones of admissible Hermitian-Yang-Mills connections near a homogeneous singularity of a reflexive sheaf, and relate it to the Harder-Narasimhan-Seshadri filtration. We also give an algebro-geometric characterization of the bubbling set. This strengthens our previous result.
topic: differential-geometry
tags:
- hermite-einstein-metrics
- vector-bundles-sheaves
- stability
- singularities
arxiv_id: 1806.11247v2
arxiv_url: https://arxiv.org/abs/1806.11247v2
arxiv_submitted: '2018-06-29'
arxiv_updated: '2020-06-17'
summary: 同次な孤立特異点を持つ反射層上の許容Hermitian–Yang–Mills接続について、拡大極限の接続とバブリング集合を層の安定性フィルトレーションから決定する。接続だけでなく曲率エネルギーの集中と重複度も含めて接錐の一意性を示し、先行研究の反射性の追加仮定を除く。
abstract_en: ''
summary_en: Rescaling a singular gauge field can retain both a limiting connection and concentrated energy. For a sheaf induced from a bundle on projective space, this paper identifies those two kinds of data through its stability filtration. Passing to the double dual determines the cone connection, while the singularities of the graded sheaf also record the bubbling. This distinction removes a restriction in the authors’ earlier treatment of homogeneous singularities.
abstract_ja: 特異点を拡大したときに残る接続と、極限接続から失われる曲率エネルギーを一緒に記述する。対象を射影空間上のベクトル束から生じる同次特異点に限ることで、Harder–Narasimhan–Seshadri次数付き層が両方を決めることを示す。二重双対だけを見ると消えてしまう特異性が、解析側ではバブリングとして現れる。
abstract_source_url: https://arxiv.org/abs/1806.11247v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1806.11247v2](https://arxiv.org/abs/1806.11247v2)
- **著者:** Xuemiao Chen, Song Sun
- **初回投稿日:** 2018-06-29
- **最終更新日:** 2020-06-17
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Hermitian–Yang–Mills接続の特異点の近くを拡大すると、部分列とゲージ変換を選んで極限接続を得る。しかし、接続の収束だけでは、狭い領域に集中して極限で失われる曲率エネルギーを捉えられない。本論文は、このバブリング集合と極限測度まで含めた接錐を対象とする。

扱うのは、複素単位球の原点に孤立特異点を持ち、その反射層が射影空間上のベクトル束から引き戻される同次な場合である。著者らの先行研究では、Harder–Narasimhan–Seshadri次数付き層が反射的であるという追加仮定のもとで接続の一意性が示されていた。今回はその仮定を取り除く。

主結果は、次数付き層の二重双対が極限接続を決め、次数付き層自体の特異集合がバブリング集合を決めるという対応である。複素余次元2の各成分では、解析的な曲率集中の重複度と代数的な重複度も一致する。したがって、接続・集合・測度の三つを含めて拡大に用いる部分列への依存がなくなる。

この区別は実質的である。極限接続が平坦でもバブリング集合が空とは限らず、論文はそのような例を与える。一方、同次性を仮定しない一般の孤立特異点に対する対応は、Introductionでは予想として提示されている。

## 背景と問題設定

$B\subset\mathbb C^n$を単位球、$\omega=\omega\_0+O(|z|^2)$を滑らかなKähler計量とし、許容Hermitian–Yang–Mills接続$A$に対応する反射層を$\mathcal E$と書く。原点は孤立特異点である。拡大写像$z\mapsto\lambda z$による接続の引き戻しは、部分列を取ると$\mathbb C^n\setminus(\lbrace 0\rbrace \cup\Sigma)$上で$A\_\infty$へゲージ変換を除いて収束する。

曲率エネルギーの弱極限は

$$
\mu=|F\_{A\_\infty}|^2\thinspace d\operatorname{Vol}\_{\omega\_0}+8\pi^2\nu
$$

と分解される。$\operatorname{Supp}\nu\setminus\lbrace 0\rbrace $は$\Sigma$の複素余次元2の部分に対応し、より低次元の部分には極限接続の除去不能な特異点が現れる。論文でいう解析的接錐は三つ組$(A\_\infty,\Sigma,\mu)$である。

射影$\pi:\mathbb C^n\setminus\lbrace 0\rbrace \to\mathbb P^{n-1}$と包含$\psi:\mathbb C^n\setminus\lbrace 0\rbrace \hookrightarrow\mathbb C^n$を用い、同次性はある正則ベクトル束$E$について

$$
\mathcal E\simeq(\psi\_\ast \pi^\ast E)|\_B
$$

と書けることを意味する。$\operatorname{Gr}^{\mathrm{HNS}}(E)$はHarder–Narasimhan–Seshadriフィルトレーションの次数付き層である。

## 主結果

### 主定理1：接続の一意性（Theorem 1.2）

同次性と孤立特異点の仮定のもとで、すべての解析的接錐の接続はゲージ同値となり、その反射層は

$$
\mathcal E\_\infty\simeq\psi\_\ast \pi^\ast \bigl((\operatorname{Gr}^{\mathrm{HNS}}(E))^{\ast \ast }\bigr)
$$

で与えられる。極限接続は右辺の安定因子上の許容Hermitian–Yang–Mills接続から作る自然な錐接続である。さらに、次数付き層の特異集合の逆像は$\Sigma$に含まれる。

従来の反射性の仮定を除いたため、次数付き層とその二重双対との差が存在しても定理を適用できる。ここで二重双対を取る操作は、極限接続の記述には適しているが、バブリング情報のすべてを保存するものではない。

### 主定理2：バブリング集合と重複度（Theorem 1.3）

同じ仮定のもとで

$$
\Sigma=\operatorname{Sing}\bigl(\pi^\ast \operatorname{Gr}^{\mathrm{HNS}}(E)\bigr)
$$

となり、各複素余次元2の既約成分について解析的重複度と代数的重複度が一致する。したがって、集合$\Sigma$と極限測度$\mu$も$E$だけで決まり、部分列によらない。ここで層の特異集合とは局所自由でない点の集合である。

### 平坦な接続と非自明なバブリング（Corollary 1.4）

$\mathbb P^3$上の階数2の反射層に、すべての特異点で接錐の接続が自明な平坦接続となる一方、バブリング集合は空でない許容Hermitian–Yang–Mills接続が存在する。これは接続のみの極限では特異点の情報を取り逃す具体例である。一般の孤立特異点に対する同様の対応はConjectures 1.1, 1.5に属し、今回の定理の仮定から同次性を外せるとは主張していない。

## 証明の見取り図

正則切断の拡大と三円型の凸性により、切断の消滅次数を制御して接錐上の同次切断を作る。安定因子を順に取り出す帰納法が、フィルトレーションと極限接続を結び付ける。

従来の大域的な$L^2$直交射影では、商層が反射的でない場合に必要な切断を得られない。本論文は点ごとの直交射影を用い、特異集合やバブリング集合を避けて切断を扱う。複素余次元が2以上であることを利用して正則円板を選び、最大値原理とHartogs型の延長を通じて切断が極限で消滅することを防ぐ。

この時点ではバブリング集合の一意性を使えないため、各拡大接続の曲率が高い領域を内在的に切り取って評価を行う。最後にChern–Simonsの推移形式による代数的重複度の表示と曲率集中を比較し、集合だけでなく重複度の一致へ進む。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1806.11247v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/1806.11247v2) — Section 1, pp. 2–7（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.3; Corollary 1.4; Conjectures 1.1, 1.5は一般の場合の予想として区別する
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1806.11247v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
